import gspread
from pathlib import Path
import json
# スプレッドシートのIDを取得します。URLの "/d/" と "/edit..." の間の部分です。
spreadsheet_id = '1l-YuVAD8Jkd5t-u89yC4vaCHKoLqxpHon7iOGxp1VkE'

# シート名を指定します。
sheet_name = 'Q'

# セルの位置を指定します。例: 'A1'
cell_location = 'A1'

gc = gspread.service_account(filename='utils/credential.json')
sh = gc.open_by_key(spreadsheet_id)

# first sheet
rows = sh.get_worksheet(0).get_all_values()
questions = [
    [
        row[0].strip(),
        row[1].strip(),
        row[2].strip().split(','),
        row[3].strip()
    ] for row in rows[1:]
]
Path('data').mkdir(exist_ok=True)
Path('data/QData.js').write_text(f"export default {json.dumps(questions, indent=2, ensure_ascii=False)};", encoding='utf-8')
    

rows = sh.get_worksheet(1).get_all_values()
services = [
    {
        'name': row[0].strip(),
        'conditions': row[1].strip(),
        'additional_state': row[3].strip(),
        'who': row[4].strip(),
        'additional_url_key': row[5].strip(),
        'description': row[6].strip()
    } for row in rows[1:]
]
print('services:', services)
Path('data/ServiceData.js').write_text(f"export default {json.dumps(services, indent=2, ensure_ascii=False)};", encoding='utf-8')

rows = sh.get_worksheet(2).get_all_values()
URLs = dict([(row[0],row[1]) for row in rows[1:]])

rows = sh.get_worksheet(3).get_all_values()
keys = rows[0][2:]
for row in rows[2:]:
    for i, key in enumerate(keys):
        URLs[f"{key}|{row[1]}"] = row[i+2]
print('URLs:', URLs)
Path('data/ServiceUrlData.js').write_text(f"export default {json.dumps(URLs, indent=2, ensure_ascii=False)};", encoding='utf-8')