export default [
  {
    "name": "児童扶養手当の支給制限解除等",
    "conditions": "家屋被災=はい",
    "additional_state": "",
    "who": "市（各区役所健康福祉課）",
    "additional_url_key": "市町村",
    "description": "住宅・家財等の財産についてその価格のおおむね2分の1以上の損害を受けた場合は、児童扶養手当について所得制限の特例措置の適用を受けられる場合があります。"
  },
  {
    "name": "災害援護資金貸付",
    "conditions": "損壊状況=全壊,損壊状況=半壊,世帯主怪我=はい",
    "additional_state": "",
    "who": "市（福祉総務課）",
    "additional_url_key": "市町村",
    "description": "世帯主が負傷したり、住宅や家財等に被害があった世帯に150万～350万円を限度として資金の貸付を行うことで、生活の再建を支援します。"
  },
  {
    "name": "被災ローン減免制度",
    "conditions": "ローン=はい",
    "additional_state": "",
    "who": "各金融機関・弁護士",
    "additional_url_key": "",
    "description": "現預金や生活再建支援金・義援金などを手元に残した上で、残ローンの減免を受けられる場合があります。"
  },
  {
    "name": "災害復興住宅融資",
    "conditions": "再建築=はい,再建築=未定",
    "additional_state": "",
    "who": "住宅金融支援機構",
    "additional_url_key": "",
    "description": "災害で住宅が「全壊」、「大規模半壊」または「半壊」した旨の「り災証明書」を交付されている方が利用できる住宅復旧のための建設資金または購入資金に対する融資です。"
  },
  {
    "name": "災害復興住宅融資（補修）",
    "conditions": "家屋補修=はい",
    "additional_state": "",
    "who": "住宅金融支援機構",
    "additional_url_key": "",
    "description": "災害で住宅に被害が生じた旨の「り災証明書」を交付されている方が利用できる住宅復旧のためのリフォーム資金に対する融資です。"
  },
  {
    "name": "生活福祉資金（緊急小口資金・災害援護資金）の貸付",
    "conditions": "家屋被災=はい",
    "additional_state": "",
    "who": "社会福祉協議会",
    "additional_url_key": "市町村",
    "description": "当座の生活資金としての10万円（社会福祉協議会による緊急小口資金）、または世帯主の負傷や住居に半壊以上の被害などがあった方について150～350万円までの資金貸付を行います（市）"
  },
  {
    "name": "母子父子寡婦福祉資金（各種貸付）",
    "conditions": "一人親=はい",
    "additional_state": "",
    "who": "市（各区役所健康福祉課）",
    "additional_url_key": "市町村",
    "description": "(1)母子家庭又は父子家庭となって7年未満の母又は父に対し、月額10.8万円×3ヶ月を限度として生活の安定・継続に要する資金を貸し付けます。(2)住宅が全壊・半壊、全焼・半焼、流出、床上浸水等の被害を受けた母子・父子・寡婦世帯を対象に、補修、保全、増築、改築等に必要な経費を200万円まで貸し付けます。(3)住居の移転に必要な資金を貸し付けます。（限度額26万円）"
  },
  {
    "name": "教科書等の無償給与",
    "conditions": "学用品=はい",
    "additional_state": "",
    "who": "市（教育委員会学務課）",
    "additional_url_key": "市町村",
    "description": "住宅に被害を受け学用品を失った小・中学校、高等学校等の児童・生徒（特別支援学校、養護学校の小学児童及び中学部生徒、中等教育学校、特別支援学校の高等部、高等専門学校、専修学校及び各種学校の生徒を含む）を対象に教科書や教材、文房具、通学用品を現物支給します。"
  },
  {
    "name": "大学等授業料等減免措置",
    "conditions": "授業料=はい",
    "additional_state": "",
    "who": "各学校",
    "additional_url_key": "",
    "description": "災害により、家計が急変した等の理由により授業料等の納付が困難な学生を対象に、各学校（大学、短期大学、大学院、高等専門学校）において授業料等の減額、免除が行われる場合があります。"
  },
  {
    "name": "緊急採用奨学金",
    "conditions": "授業料=はい",
    "additional_state": "",
    "who": "各学校・日本学生支援機構",
    "additional_url_key": "",
    "description": "災害等により、家計が急変した大学、短期大学、大学院、高等専門学校、専修学校（専門課程）の学生・生徒に対して、緊急採用奨学金の貸与を実施します。"
  },
  {
    "name": "住民税,固定資産税の減免",
    "conditions": "家屋被災=はい",
    "additional_state": "",
    "who": "市（市民税課、資産税課)",
    "additional_url_key": "市町村",
    "description": "土地・住宅・家財・農作物に被害を受けた方に対し、住民税、固定資産税・都市計画税の減免を申請できる場合があります。"
  },
  {
    "name": "国税の減免・猶予",
    "conditions": "損壊状況=全壊,損壊状況=半壊",
    "additional_state": "",
    "who": "税務署",
    "additional_url_key": "",
    "description": "災害により住宅や家財などに損害を受けた方は、確定申告において「所得税法」に定める雑損控除の方法、「災害減免法」に定める税金の軽減免除による方法のどちらか有利な方法で所得税及び復興特別所得税の軽減又は免除を受けられる場合があるほか、被害を受けた事業用資産の経費算入など各種の制度を適用できる場合があります。"
  },
  {
    "name": "国民健康保険税、一部負担金（窓口負担）の減免等",
    "conditions": "国保=はい",
    "additional_state": "",
    "who": "市（各区役所区民生活課・窓口サービス課）",
    "additional_url_key": "市町村",
    "description": "災害により住宅・家財などが著しい損害を受けた方で、保険税の支払いや医療機関を受診した際に支払う一部負担金（窓口負担）が困難となった方について、国民健康保険税・一部負担金を減免または支払いを猶予します。"
  },
  {
    "name": "介護保険の保険料、利用者負担額の減免等",
    "conditions": "介護保険=はい",
    "additional_state": "",
    "who": "市（各区役所区民生活課・窓口サービス課）",
    "additional_url_key": "市町村",
    "description": "災害により住宅・家財などが著しい損害を受けた方で、保険料の支払いや介護保険のサービスを利用したときの１～３割負担が困難となった方困難となった方について、介護保険料の減免または一定期間利用者負担額を減免します。"
  },
  {
    "name": "後期高齢者医療の保険料、一部負担金（窓口負担）の減免",
    "conditions": "後期高齢者=はい",
    "additional_state": "",
    "who": "市（各区役所区民生活課・窓口サービス課）",
    "additional_url_key": "市町村",
    "description": "災害により住宅・家財などが著しい損害を受けた方で、保険料の支払いや医療機関を受診した際に支払う一部負担金（窓口負担）が困難となった方について、後期高齢者医療保険料を減免します。"
  },
  {
    "name": "医療機関での負担金（窓口負担）免除",
    "conditions": "損壊状況=半壊,損壊状況=全壊,世帯主収入=はい",
    "additional_state": "",
    "who": "各健康保険組合",
    "additional_url_key": "",
    "description": "健康保険等の被保険者等について、医療機関を受診した際に支払う窓口負担の減免措置が講じられる場合があります。"
  },
  {
    "name": "NHK受信料の免除",
    "conditions": "損壊状況=全壊,損壊状況=半壊,損壊状況=一部損壊浸水",
    "additional_state": "",
    "who": "NHK",
    "additional_url_key": "",
    "description": "受信契約の住所の建物が、半壊・半焼又は床上浸水以上程度の被害を受けた方について、受信料が一定期間免除されることがあります。"
  },
  {
    "name": "住宅の被害の拡大を防止するための緊急の修理",
    "conditions": "家屋被災=はい",
    "additional_state": "",
    "who": "市（公共建築課）",
    "additional_url_key": "市町村",
    "description": "災害のため、屋根、外壁、窓や玄関などに損傷があり、雨が降れば雨漏りや浸水が起こると判断された住宅にお住まいの方に、ブルーシートの支給または業者によるブルーシート等を用いた一時的な処置を支援します。（上限5万円以内）"
  },
  {
    "name": "納税の猶予",
    "conditions": "家屋被災=はい,人的被害=はい",
    "additional_state": "",
    "who": "市（納税課）",
    "additional_url_key": "市町村",
    "description": "災害により被害を受け納税が困難となった場合に、申請により最大１年間、税額を分割して納められる制度。猶予が認められた場合は、猶予期間中の延滞金の全部、又は一部が免除される。"
  },
  {
    "name": "国民年金保険料の免除等",
    "conditions": "年金＝はい",
    "additional_state": "",
    "who": "市（各区役所区民生活課・窓口サービス課）",
    "additional_url_key": "市町村",
    "description": "被災に伴い、住宅、家財、その他の財産について、おおむね２分の１以上の損害を受けられて国民年金保険料の納付が困難な方は、申請により国民年金保険料の納付が免除等される場合があります。"
  },
  {
    "name": "障害福祉サービス等の利用者負担金の減免",
    "conditions": "障害者=はい",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "障害福祉サービス、障害児通所支援、障害児入所支援に係る利用者負担額を一定期間減免します。"
  },
  {
    "name": "療養介護医療に係る利用者負担額の減免",
    "conditions": "介護者=はい,",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "療養介護医療に係る利用者負担額を一定期間減免します。"
  },
  {
    "name": "特別児童扶養手当、特別障がい者手当、障がい児福祉手当の支給制限解除等",
    "conditions": "障害児童=はい",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "おおむね1/2以上の財産が被災した場合に、所得制限により支給停止となっている場合でも被災状況により支給停止を解除するなどします。"
  },
  {
    "name": "在宅重度重複障がい者介護見舞金支給事業の支給制限解除",
    "conditions": "障害者=はい,障害児童=はい",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "おおむね1/2以上の財産が被災した場合に、所得制限により支給停止となっている場合でも被災状況により支給停止を解除するなどします。"
  },
  {
    "name": "自立支援医療受給者証を紛失した場合等の取り扱い",
    "conditions": "障害者=はい,障害児童=はい",
    "additional_state": "",
    "who": "市（【育成医療】こども家庭課【更生医療・精神通院医療】障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "受給者証を提示できない場合においても、氏名、生年月日及び住所を確認することにより指定自立支援医療機関を受診できます。また、緊急の場合は、受診する指定自立支援医療機関と受給者証に記載されている指定医療機関の名称が異なる場合でも、事後に支給認定の変更を行うことができます。さらに、指定自立支援医療機関以外の医療機関でも受診することができます。"
  },
  {
    "name": "自立支援医療に係る自己負担額の減免",
    "conditions": "障害者=はい,障害児童=はい",
    "additional_state": "",
    "who": "市（【育成医療】こども家庭課【更生医療・精神通院医療】障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "被災した自立支援医療世帯所得勘案対象者の所得状況の変化に応じた所得区分を適用する等、適宜の方法により世帯所得勘案対象者の負担を軽減します。"
  },
  {
    "name": "日常生活用具の耐用年数等によらない給付",
    "conditions": "障害者=はい,障害児童=はい",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "被災された対象者で日常生活用具が必要となる場合、耐用年数等にかかわらず給付します。"
  },
  {
    "name": "補装具費の減免、耐用年数等によらない支給",
    "conditions": "障害者=はい,障害児童=はい",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "所得状況の変化等に応じて適宜の方法により補装具費支給対象障がい者等の負担を軽減します。また、被災された対象者で補装具が必要となる場合、耐用年数等にかかわらず支給します。"
  },
  {
    "name": "小児慢性特定疾病医療費助成に係る手続きの簡素化",
    "conditions": "児童疾患=はい",
    "additional_state": "",
    "who": "市（こども家庭課）",
    "additional_url_key": "市町村",
    "description": "被災したことを原因として受給者証の提出ができない場合、受給者証の交付を受けている者であることを医療機関に申し出れば、医療機関が氏名、生年月日、住所を確認することで、通常の公費負担医療が受けられます。※緊急の場合は指定医療機関以外の医療機関でも通常の公費負担医療が受けられます。"
  },
  {
    "name": "養育医療受診に係る手続きの簡素化",
    "conditions": "養育医療=はい",
    "additional_state": "",
    "who": "市（こども家庭課）",
    "additional_url_key": "市町村",
    "description": "被災したことを原因として養育医療券の提出ができない場合、養育医療券の交付を受けている者であることを医療機関に申し出れば、医療機関が氏名、生年月日、住所を確認することで、通常の公費負担医療が受けられます。※緊急の場合は指定医療機関以外の医療機関でも通常の公費負担医療が受けられます。"
  },
  {
    "name": "寡婦福祉資金の所得制限適用除外",
    "conditions": "寡婦=はい",
    "additional_state": "",
    "who": "市（各区役所健康福祉課）",
    "additional_url_key": "市町村",
    "description": "災害により、生活の状態が著しく窮迫していると認められる場合は、現に扶養する子その他これに準ずる者のない寡婦であっても、所得制限を適用しません。"
  },
  {
    "name": "保育料の減免",
    "conditions": "保育園=はい,",
    "additional_state": "",
    "who": "市（各区役所健康福祉課）",
    "additional_url_key": "市町村",
    "description": "災害により住宅等について著しい損害を受けた場合には、申請に基づき、一定期間、保育料の全部または一部を減免することができます。"
  },
  {
    "name": "公共料金の軽減・免除",
    "conditions": "家屋被災=はい,人的被害=はい",
    "additional_state": "",
    "who": "電力会社など",
    "additional_url_key": "",
    "description": "電気・ガス・電話等の料金について軽減・免除が受けられることがありあます。"
  },
  {
    "name": "災害弔慰金",
    "conditions": "死亡者＝はい",
    "additional_state": "",
    "who": "市",
    "additional_url_key": "市町村",
    "description": "災害により死亡された方のご遺族に対して、災害弔慰金を支給します。"
  },
  {
    "name": "母子 父子 寡婦福祉資金貸付金の償還金支払い猶予",
    "conditions": "一人親=はい",
    "additional_state": "",
    "who": "都道府県・市の福祉事務所",
    "additional_url_key": "市町村",
    "description": "災害により被災した母子家庭及び 父子家庭並びに 寡婦に 対しては、償還金の支払猶予などの特別措置を講じます。"
  },
  {
    "name": "高等教育の修学支援新制度（家計が急変した学生）",
    "conditions": "家計急変=はい,家計急変=わからない,高等教育＝はい",
    "additional_state": "",
    "who": "日本学生支援機構（JASSO）",
    "additional_url_key": "",
    "description": "大学、短期大学、高等専門学校、専門学校の授業料・入学金について、一定の所得以下の場合は免除または減額と、返還を要しない給付型奨学金が受けられます。※大学院は対象外"
  },
  {
    "name": "JASSO（日本学生支援機構）災害支援金",
    "conditions": "高等教育＝はい/損壊状況=全壊,損壊状況=半壊,床上浸水=はい",
    "additional_state": "",
    "who": "日本学生支援機構（JASSO）",
    "additional_url_key": "",
    "description": "大学、短期大学、大学院、高等専門学校、専修学校専門課程に在学中で、学生本人やその生計維持者が現に住んでいる家が、半壊（半流出・半埋没及び半焼失を含みます）以上の被害を受けたり、床上浸水となったりした場合に支援金（10万円）が支給されます。"
  },
  {
    "name": "奨学金の減額返還・返還期限猶予（日本学生支援機構）",
    "conditions": "高等教育＝はい",
    "additional_state": "",
    "who": "日本学生支援機構（JASSO）",
    "additional_url_key": "",
    "description": "災害等により奨学金の返還が困難となった方について、期間を延長する代わりに返還月額を減額できたり、一定期間返還を先送りしたりすることができます。"
  },
  {
    "name": "国民年金保険料の免除等",
    "conditions": "年金＝はい",
    "additional_state": "",
    "who": "市、年金事務所",
    "additional_url_key": "市町村",
    "description": "被災に伴い、住宅、家財、その他の財産について、おおむね２分の１以上の損害を受けられて国民年金保険料の納付が困難な方は、申請により国民年金保険料の納付が免除等される場合があります。"
  },
  {
    "name": "確定拠出年金関係における掛金の納付期限の延長",
    "conditions": "年金＝はい",
    "additional_state": "",
    "who": "各確定拠出年金運営管理機関、金融機関",
    "additional_url_key": "",
    "description": "確定拠出年金の掛金について、被災等の理由により納付期限が延長できる場合があります。"
  },
  {
    "name": "厚生年金基金及び国民年金基金の掛金等の納付期限の延長",
    "conditions": "年金＝はい",
    "additional_state": "",
    "who": "各年金基金",
    "additional_url_key": "",
    "description": "各年金基金の掛金について、被災等の理由により納付期限が延長できる場合があります。"
  },
  {
    "name": "NHK受信料の免除",
    "conditions": "損壊状況=全壊,損壊状況=半壊,損壊状況=一部損壊浸水",
    "additional_state": "",
    "who": "NHK",
    "additional_url_key": "",
    "description": "受信契約の住所の建物が、半壊・半焼又は床上浸水以上程度の被害を受けた方について、受信料が一定期間免除されることがあります。"
  },
  {
    "name": "生活困窮者自立支援制度",
    "conditions": "家計急変=はい,家計急変=わからない,家屋被災=はい,人的被害=はい",
    "additional_state": "",
    "who": "都道府県・市町村",
    "additional_url_key": "",
    "description": "働きたくても働けない、住む所がない、など一人ひとりの状況に合わせた支援プランを作成し、専門の支援員が相談者に寄り添いながら、他の専門機関と連携して、解決に向けた支援（住宅確保給付金や就労準備支援など）を行います。"
  },
  {
    "name": "生活保護",
    "conditions": "家計急変=はい,家計急変=わからない,",
    "additional_state": "",
    "who": "都道府県・市町村",
    "additional_url_key": "",
    "description": "生活に現に困窮している方に、生活の保障と自立の助長を図ることを目的に、困窮の程度に応じて必要な保護を行うものです。資産や能力等すべてを活用した上でも生活に困窮する方が対象です。"
  },
  {
    "name": "市立高等学校授業料の免除",
    "conditions": "市立高校＝はい",
    "additional_state": "",
    "who": "市（教育委員会学務課）",
    "additional_url_key": "市町村",
    "description": "(1)天災その他不慮の災害により、災害を受けた日以降の市町村民税の全額を免除された場合に申請により、授業料を減免する。（ただし授業料の請求がある者に限る）(2)災害等により、その世帯の総収入額が生活保護法に基づく保護基準額を下回る場合に申請により、授業料を減免する。（ただし授業料の請求がある者に限る）"
  },
  {
    "name": "共同管工事助成",
    "conditions": "共同管＝はい",
    "additional_state": "",
    "who": "市（各下水道事務所または分室）",
    "additional_url_key": "市町村",
    "description": "２戸以上で共同排水設備を設置している方について、共同で利用する部分の工事費の4/5を助成します。"
  },
  {
    "name": "住宅相談窓口",
    "conditions": "家屋被災=はい/市町村=新潟市",
    "additional_state": "",
    "who": "市（建築行政課）",
    "additional_url_key": "市町村",
    "description": "独立行政法人住宅金融支援機構が実施する①住宅再建及び住宅ローンの返済に関する相談②住宅ローン返済中の被災した市民に対して、当該住宅ローンの支払いの猶予や返済期間の延長等の相談　についての住宅相談窓口を設置"
  },
  {
    "name": "新潟市重度障がい者医療費助成の支給制限解除",
    "conditions": "障害者=はい,障害児童=はい",
    "additional_state": "",
    "who": "市（障がい福祉課）",
    "additional_url_key": "市町村",
    "description": "おおむね1/2以上の財産が被災した場合に、所得制限により支給停止となっている場合でも被災状況により支給停止を解除するなどします。"
  },
  {
    "name": "日常生活に必要な最小限度の部分の修理",
    "conditions": "損壊状況=半壊,損壊状況=準半壊,/市町村=新潟市",
    "additional_state": "",
    "who": "市（公共建築課）",
    "additional_url_key": "市町村",
    "description": "被災した住宅の居室、台所、トイレなど日常生活に不可欠な最小限度の部分の応急的な修理について、修理費用を新潟市が直接業者に支払います。"
  },
  {
    "name": "市営住宅",
    "conditions": "家屋被災=はい/市町村=新潟市",
    "additional_state": "",
    "who": "市（住環境政策課）",
    "additional_url_key": "市町村",
    "description": "現在の住宅に住むことが困難となった方を対象に、市営住宅への入居に関する相談を行います。"
  },
  {
    "name": "賃貸型応急住宅",
    "conditions": "家屋被災=はい/県=石川県,県=富山県",
    "additional_state": "",
    "who": "市町村",
    "additional_url_key": "市町村",
    "description": "災害により住宅に甚大な被害を受けられた方に、応急仮設住宅として民間賃貸住宅を借り上げて提供します。"
  },
  {
    "name": "お住まいの自治体以外の公営住宅",
    "conditions": "家屋被災=はい",
    "additional_state": "",
    "who": "各自治体",
    "additional_url_key": "",
    "description": "住宅被害を受けられた方に対して、お住まいの自治体以外でも公営住宅等の提供がされています。"
  },
  {
    "name": "災害障害見舞金",
    "conditions": "見舞金=はい",
    "additional_state": "未定",
    "who": "市（福祉総務課）",
    "additional_url_key": "市町村",
    "description": "災害による負傷、疾病で精神又は身体に著しい障害が出た場合、災害障害見舞金を支給します。"
  },
  {
    "name": "被災者生活再建支援制度",
    "conditions": "損壊状況=全壊,損壊状況=半壊,損壊状況=準半壊,/市町村=氷見市,県=石川県",
    "additional_state": "",
    "who": "市",
    "additional_url_key": "市町村",
    "description": "災害により居住する住宅が全壊するなど、生活基盤に著しい被害を受けた世帯に対して支援金を支給します。"
  },
  {
    "name": "災害復旧資金の貸し付け（富山県勤労者生活資金融資制度）",
    "conditions": "家屋被災=はい,人的被害=はい/県=富山県",
    "additional_state": "",
    "who": "北陸労働金庫",
    "additional_url_key": "",
    "description": "災害により被害を受けた勤労者又はその家族に対し、住宅及び生活の復旧等に必要な資金の貸付けを行う。（融資限度額：150万円）"
  },
  {
    "name": "小・中学生の就学援助措置",
    "conditions": "就学資金=はい",
    "additional_state": "",
    "who": "市（学校教育課）",
    "additional_url_key": "市町村",
    "description": "被災により、就学が困難な児童・生徒の保護者を対象に、就学に必要な学用品費、新入学用品費、通学費、校外活動費、学校給食費等を援助します。"
  },
  {
    "name": "入院時の一部負担金の免除及び徴収猶予",
    "conditions": "入院費=はい",
    "additional_state": "",
    "who": "市",
    "additional_url_key": "市町村",
    "description": "国民健康保険加入者であり、災害や失業等の特別な事由により生活が著しく困窮し、資産等を活用しても、入院の際の医療機関等での一部負担金（窓口負担分）の支払いが困難と認められるときは、申請により一部負担金の支払いを免除または徴収猶予します。"
  }
];