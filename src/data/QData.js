export default [
  [
    "県",
    "",
    [
      "石川県",
      "富山県",
      "新潟県"
    ],
    "お住まいの県を選択して下さい"
  ],
  [
    "市町村",
    "県=新潟県",
    [
      "新潟市",
      "長岡市",
      "三条市",
      "柏崎市",
      "新発田市",
      "小千谷市",
      "加茂市",
      "十日町市",
      "見附市",
      "村上市",
      "燕市",
      "糸魚川市",
      "妙高市",
      "五泉市",
      "上越市",
      "阿賀野市",
      "佐渡市",
      "魚沼市",
      "南魚沼市",
      "胎内市",
      "聖籠町",
      "弥彦村",
      "田上町",
      "阿賀町",
      "出雲崎町",
      "湯沢町",
      "津南町",
      "刈羽村",
      "関川村",
      "粟島浦村"
    ],
    "お住まいの市町村を選択して下さい"
  ],
  [
    "市町村",
    "県=富山県",
    [
      "富山市",
      "高岡市",
      "魚津市",
      "氷見市",
      "滑川市",
      "黒部市",
      "砺波市",
      "小矢部市",
      "南砺市",
      "射水市",
      "舟橋村",
      "上市町",
      "立山町",
      "入善町",
      "朝日町"
    ],
    "お住まいの市町村を選択して下さい"
  ],
  [
    "市町村",
    "県=石川県",
    [
      "金沢市",
      "七尾市",
      "小松市",
      "輪島市",
      "珠洲市",
      "加賀市",
      "羽咋市",
      "かほく市",
      "白山市",
      "能美市",
      "野々市市",
      "川北町",
      "津幡町",
      "内灘町",
      "志賀町",
      "宝達志水町",
      "中能登町",
      "穴水町",
      "能登町"
    ],
    "お住まいの市町村を選択して下さい"
  ],
  [
    "家屋被災",
    "",
    [
      "はい",
      "いいえ"
    ],
    "家が被災しましたか？"
  ],
  [
    "損壊状況",
    "家屋被災=はい",
    [
      "全壊",
      "半壊",
      "一部損壊"
    ],
    "被害の程度を選んでください。"
  ],
  [
    "ローン",
    "家屋被災=はい",
    [
      "はい",
      "いいえ"
    ],
    "ローンは残っていますか？"
  ],
  [
    "再建築",
    "損壊状況=全壊,損壊状況=半壊",
    [
      "はい",
      "いいえ"
    ],
    "立て直し,または購入しますか？"
  ],
  [
    "家屋補修",
    "損壊状況=半壊/再建築=いいえ,損壊状況=一部損壊",
    [
      "はい",
      "いいえ"
    ],
    "修理しますか？"
  ],
  [
    "福祉世帯",
    "家屋被災=はい",
    [
      "はい",
      "いいえ"
    ],
    "低所得者世帯、障害者世帯、高齢者世帯に該当しますか？"
  ],
  [
    "人的被害",
    "",
    [
      "はい",
      "いいえ"
    ],
    "人に被害はありましたか？"
  ],
  [
    "世帯主怪我",
    "人的被害=はい",
    [
      "はい",
      "いいえ"
    ],
    "世帯主が療養期間おおむね一か月以上の怪我をしたということがありますか？"
  ],
  [
    "見舞金",
    "人的被害=はい",
    [
      "はい",
      "いいえ"
    ],
    "災害によって負傷または病気になったり、重い後遺障害が残ったということはありますか？"
  ],
  [
    "子供有無",
    "",
    [
      "はい",
      "いいえ"
    ],
    "お子さんはいらっしゃいますか？"
  ],
  [
    "学用品",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "教科書、学用品などを失いましたか？"
  ],
  [
    "一人親",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "一人親（20歳未満の子どもを扶養していて、配偶者がいない）に該当しますか？"
  ],
  [
    "高等教育",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "大学、短期大学、大学院、高等専門学校、専修学校専門課程に在学中または進学予定のお子さんはいますか？"
  ],
  [
    "市立高校",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "市立高校に通うお子さんはいますか？"
  ],
  [
    "保育園",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "保育園に通うお子さんはいますか？"
  ],
  [
    "授業料",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "大学や専門学校等の授業料支払いが厳しくなったということはありますか？"
  ],
  [
    "児童疾患",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "お子さんは小児慢性特定疾病の治療を受けていますか？"
  ],
  [
    "養育医療",
    "子供有無=はい",
    [
      "はい",
      "いいえ"
    ],
    "お子さんは養育医療の治療を受けていますか？"
  ],
  [
    "入院費",
    "",
    [
      "はい",
      "いいえ"
    ],
    "入院費用の負担が厳しい"
  ],
  [
    "高齢融資",
    "",
    [
      "はい",
      "いいえ"
    ],
    "高齢だがお金を借りたいということはありますか？"
  ],
  [
    "障害者",
    "福祉世帯=はい",
    [
      "はい",
      "いいえ"
    ],
    "あなたもしくはご家族が障害をお持ちですか？"
  ],
  [
    "障害児童",
    "障害者=はい",
    [
      "はい",
      "いいえ"
    ],
    "障がい者はお子さんですか？"
  ],
  [
    "介護者",
    "",
    [
      "はい",
      "いいえ"
    ],
    "あなたもしくはご家族が介護を受けていますか？"
  ],
  [
    "後期高齢者",
    "",
    [
      "はい",
      "いいえ"
    ],
    "あなたもしくはご家族が後期高齢者医療（75歳以上、寝たきり等の場合は65歳以上）に加入していますか？"
  ],
  [
    "国保",
    "",
    [
      "はい",
      "いいえ"
    ],
    "あなたもしくはご家族が国民健康保険に加入していますか？"
  ],
  [
    "介護保険",
    "",
    [
      "はい",
      "いいえ"
    ],
    "あなたもしくはご家族が介護保険料を支払っていますか？"
  ],
  [
    "世帯主収入",
    "",
    [
      "はい",
      "いいえ"
    ],
    "主に生計維持をしている方が失職、業務を廃止、怪我などで収入がなくなったということはありますか？"
  ],
  [
    "寡婦",
    "",
    [
      "はい",
      "いいえ"
    ],
    "寡婦（かつて母子家庭の母であった方）もしくは「配偶者のいない女子で、40歳以上の者」に該当しますか？"
  ],
  [
    "年金",
    "",
    [
      "はい",
      "いいえ"
    ],
    "年金掛金または国民年金保険料を払っていますか？"
  ],
  [
    "家計急変",
    "",
    [
      "はい",
      "いいえ",
      "わからない"
    ],
    "家計（収入）が大きく変わる見込みはありますか？"
  ],
  [
    "共同管",
    "家屋被災=はい",
    [
      "はい",
      "いいえ",
      "わからない"
    ],
    "２戸以上で共同排水設備を設置していますか？（貸家・法人を除く）"
  ]
];