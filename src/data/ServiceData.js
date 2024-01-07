export default [
    {name:"公営住宅", conditions:"家屋被災=はい", additional_state:"", who:"市（都市整備課）・県", description:"住宅が被害を受けて居住困難となった方の緊急避難先として市営・県営住宅を無償提供します。（※2019/11/22現在、市営住宅は受付終了）"},
    {name:"賃貸型応急住宅", conditions:"家屋被災=はい", additional_state:"", who:"市（都市整備課）", description:"災害により住宅に甚大な被害を受けられた方に、応急仮設住宅として民間賃貸住宅を借り上げて提供します。"},
    {name:"災害見舞金", conditions:"家屋被災=はい", additional_state:"", who:"市（地域福祉課）・県", description:"住宅または人が被害を受けた世帯または世帯員に対して見舞金を支給しています。"},
    {name:"児童扶養手当の特例", conditions:"家屋被災=はい", additional_state:"", who:"市（子育て支援課）・県", description:"住宅・家財等の財産についてその価格のおおむね2分の1以上の損害を受けた場合は、児童扶養手当について所得制限の特例措置の適用を受けられる場合があります。"},
    {name:"被災者生活再建支援制度", conditions:"損壊状況=全壊,損壊状況=半壊", additional_state:"", who:"市（地域福祉課）", description:"災害により居住する住宅が全壊するなど、生活基盤に著しい被害を受けた世帯に対して支援金を支給します。"},
    {name:"災害援護資金貸付", conditions:"損壊状況=全壊,損壊状況=半壊,世帯主怪我=はい", additional_state:"", who:"市（地域福祉課）", description:"世帯主が負傷したり、住宅や家財等に被害があった世帯に資金の貸付を行うことで、生活の再建を支援します。"},
    {name:"被災ローン減免制度", conditions:"ローン=はい", additional_state:"", who:"各金融機関・弁護士", description:"現預金や生活再建支援金・義援金などを手元に残した上で、残ローンの減免を受けられる場合があります。"},
    {name:"災害復興住宅融資", conditions:"損壊状況=全壊,損壊状況=半壊", additional_state:"", who:"住宅金融支援機構", description:"災害で住宅が「全壊」、「大規模半壊」または「半壊」した旨の「り災証明書」を交付されている方が利用できる住宅復旧のための建設資金または購入資金に対する融資です。"},
    {name:"災害復興住宅融資（補修）", conditions:"家屋補修=はい", additional_state:"", who:"住宅金融支援機構", description:"災害で住宅に被害が生じた旨の「り災証明書」を交付されている方が利用できる住宅復旧のためのリフォーム資金に対する融資です。"},
    {name:"生活福祉資金（緊急小口資金・災害援護資金）の貸付", conditions:"家屋被災=はい", additional_state:"", who:"社会福祉協議会・市", description:"当座の生活資金としての10万円（社会福祉協議会による緊急小口資金）、または世帯主の負傷や住居に半壊以上の被害などがあった方について150～350万円までの資金貸付を行います（市）"},
    {name:"災害救助法による応急修理", conditions:"家屋補修=はい", additional_state:"", who:"市（都市整備課）", description:"被災した住宅について必要最小限の修理の補助（最大59.5万円）を行うことで、被災者が引き続き元の住宅に住むことができるように支援する制度です。"},
    {name:"母子父子寡婦福祉資金の住宅資金貸付", conditions:"一人親=はい", additional_state:"", who:"市（子育て支援課）", description:"住宅が全壊・半壊、全焼・半焼、流出、床上浸水等の被害を受けた母子・父子・寡婦世帯を対象に、補修、保全、増築、改築等に必要な経費を200万円まで貸し付けます。"},
    {name:"災害障害見舞金", conditions:"見舞金=はい", additional_state:"未定", who:"市（千葉県市町村総合事務組合）", description:"災害による負傷、疾病で精神又は身体に著しい障害が出た場合、災害障害見舞金を支給します。"},
    {name:"教科書等の無償給与", conditions:"学用品=はい", additional_state:"", who:"市（学校教育課）", description:"、住宅に被害を受け学用品を失った小・中学校、高等学校等の児童・生徒（特別支援学校、養護学校の小学児童及び中学部生徒、中等教育学校、特別支援学校の高等部、高等専門学校、専修学校及び各種学校の生徒を含む）が対象に教科書や教材、文房具、通学用品を現物支給します。"},
    {name:"特別支援学校等への就学奨励事業", conditions:"特別支援学校=はい", additional_state:"", who:"市（障がい者支援課）", description:"被災により新たに特別支援教育就学奨励費事業の対象となった幼児、児童又は生徒の保護者を対象に通学費、学用品等を援助します。"},
    {name:"特別児童扶養手当・障害児福祉手当の特例", conditions:"障害児童=はい", additional_state:"", who:"市（障がい者支援課）", description:"災害により住宅・家財などの財産の価格のおおむね1/2以上の損害を受けた場合には、所得制限の特例措置を適用します。"},
    {name:"特別障害者手当の特例", conditions:"損壊状況=半壊/障害者=はい,損壊状況=全壊/障害者=はい,", additional_state:"", who:"市（障がい者支援課）", description:"災害により住宅・家財などの財産の価格のおおむね1/2以上の損害を受けた場合には、所得制限の特例措置を適用します。"},
    {name:"福祉用具の再貸与・再購入", conditions:"介護者=はい,", additional_state:"", who:"市（介護保険課）", description:"被災前に使用していた福祉用具・特定福祉用具が破損などをした場合は、再度貸与を受ける、または再度同一の福祉用具を購入することができます。※負担割合に応じた自己負担が必要です。"},
    {name:"障がい者の福祉用具の再給付", conditions:"障害者=はい,", additional_state:"", who:"市（障がい者支援課）", description:"災害により障がい者の福祉用具が使用できなくなった方に、用具の再給付を行うことができます。"},
    {name:"小・中学生の就学援助措置", conditions:"就学資金=はい", additional_state:"", who:"市（学校教育課）", description:"被災により、就学が困難な児童・生徒の保護者を対象に、就学に必要な学用品費、新入学用品費、通学費、校外活動費、学校給食費等を援助します。"},
    {name:"大学等授業料等減免措置", conditions:"授業料=はい", additional_state:"", who:"各学校", description:"災害により、家計が急変した等の理由により授業料等の納付が困難な学生を対象に、各学校（大学、短期大学、大学院、高等専門学校）において授業料等の減額、免除が行われる場合があります。"},
    {name:"緊急採用奨学金", conditions:"授業料=はい", additional_state:"", who:"各学校・日本学生支援機構", description:"災害等により、家計が急変した大学、短期大学、大学院、高等専門学校、専修学校（専門課程）の学生・生徒に対して、緊急採用奨学金の貸与を実施します。"},
    {name:"住民税、固定資産税の減免", conditions:"家屋被災=はい", additional_state:"", who:"市（課税課）", description:"土地・住宅・家財・農作物に被害を受けた方に対し、固定資産税・都市計画税・住民税の減免が実施される場合があります。"},
    {name:"国税の減免・猶予", conditions:"損壊状況=全壊,損壊状況=半壊", additional_state:"", who:"税務署", description:"災害により住宅や家財などに損害を受けた方は、確定申告において「所得税法」に定める雑損控除の方法、「災害減免法」に定める税金の軽減免除による方法のどちらか有利な方法で所得税及び復興特別所得税の軽減又は免除を受けられる場合があるほか、被害を受けた事業用資産の経費算入など各種の制度を適用できる場合があります。"},
    {name:"国民健康保険税の減免", conditions:"国保=はい", additional_state:"", who:"市（保険年金課）", description:"災害による住宅・家財などの損害割合が、保険金などで補てんされる金額を除き3/10以上の方の国民健康保険税を減免します。※所得要件があります。"},
    {name:"介護保険料の減免・猶予", conditions:"介護保険=はい", additional_state:"", who:"市（介護保険課）", description:"災害による住宅・家財などの損害割合が、保険金などで補てんされる金額を除き3/10以上の方の介護保険料を減免します。"},
    {name:"後期高齢者医療保険料の減免", conditions:"後期高齢者=はい", additional_state:"", who:"市（保険年金課）", description:"災害による住宅・家財などの損害割合が、保険金などで補てんされる金額を除き2/10以上の方の後期高齢者医療保険料を減免します。※所得要件があります。"},
    {name:"後期高齢者医療の一部負担金の減免・徴収猶予", conditions:"後期高齢者=はい", additional_state:"", who:"市（保険年金課）", description:"災害により生活が困窮し、一部負担金の支払いが困難な場合、被害状況に応じ一部負担金の減免又は徴収猶予を受けられます。※所得要件があります。"},
    {name:"医療機関での負担金免除", conditions:"損壊状況=半壊,損壊状況=全壊,世帯主収入=はい", additional_state:"", who:"各健康保険組合", description:"健康保険等の被保険者等について、窓口負担の減免措置が講じられる場合があります。"},
    {name:"電気料金の減免・期限延長", conditions:"生活費=はい", additional_state:"", who:"東京電力など", description:"電気料金の支払期日延長、不使用月の電気料金の免除、新規・仮設工事費の免除、使用できなくなった設備の基本料金免除などの特別措置が受けられる場合があります。"},
    {name:"入院時の一部負担金の免除及び徴収猶予", conditions:"入院費=はい", additional_state:"市（保険年金課）", who:"", description:"国民健康保険加入者であり、災害や失業等の特別な事由により生活が著しく困窮し、資産等を活用しても、入院の際の医療機関等での一部負担金（窓口負担分）の支払いが困難と認められるときは、申請により一部負担金の支払いを免除または徴収猶予します。"},
    {name:"年金担保貸付事業・労災年金担保貸付事業", conditions:"高齢融資=はい", additional_state:"独立行政法人 福祉医療機構", who:"", description:"国民年金、厚生年金保険または労働者災害補償保険の年金を担保として融資することが法律で唯一認められた制度です。保健・医療、介護・福祉、住宅改修、冠婚葬祭、生活必需物品の購入などの支出のために一時的に小口の資金が必要な場合にご利用いただけます。"},
    {name:"恩給・共済年金担保融資", conditions:"高齢融資=はい", additional_state:"", who:"日本政策金融公庫", description:"恩給等を担保に、教育費や居住関係費、事業資金等を融資するものです。"}
];