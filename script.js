/* ============================================================
   عظمة وجلال مصر — Multi-page Bootstrap version
   ============================================================ */

const translations = {
  ar: {
    /* ---------- Navigation & Brand ---------- */
    "brand": "مصر",
    "nav.home": "الرئيسية",
    "nav.history": "التاريخ",
    "nav.landmarks": "المعالم",
    "nav.modern": "النهضة",
    "nav.about": "عن المبادرة",

    /* ---------- HOME PAGE ---------- */
    "hero.title": "عظمة وجلال مصر",
    "hero.subtitle": "إرث سبعة آلاف عام يضيء المستقبل",
    "hero.cta": "اكتشف الخلود",

    "intro.title": "أم الدنيا",
    "intro.desc":
      "مصر ليست دولة فحسب، بل هي حكاية الإنسان الأولى. هي المعلمة التي علّمت العالم الكتابة والطب والفلك والهندسة. على ضفاف نيلها وُلِدَت أول حضارة عرفها التاريخ، ومن جبالها استُخرِج الذهب الذي زيّن قصور الملوك، وفي صحرائها قام أعظم بناء في تاريخ البشرية. مَن يكتب عن مصر يكتب عن البداية والنهاية، عن الأبدية ذاتها.",

    "stats.title": "أرقام تتحدث",
    "stats.years": "سنة من الحضارة",
    "stats.nile": "كم طول النيل",
    "stats.pyramids": "أهرامات الجيزة",
    "stats.unesco": "موقع تراث عالمي",

    "ancient.title": "فجر التاريخ",
    "ancient.desc":
      "حيث بدأ الزمن، ترك أجدادنا معجزات محفورة في الحجر، تتحدى الفناء وتروي قصة أمة علّمت البشرية معنى الخلود. من أهرامات الجيزة الشامخة، إلى معابد الكرنك المهيبة، إلى مقابر وادي الملوك التي تحفظ أسرار الفراعنة، كل حجر يهمس بقصة، وكل نقش يحكي بطولة. لقد بنى المصريون القدماء حضارة دامت ثلاثة آلاف عام دون انقطاع، وهو رقم لم يحققه شعب آخر في تاريخ الأرض.",

    "nile.title": "شريان الحياة",
    "nile.desc":
      "هبة السماء، يجري في عروقنا قبل أن يجري في أرضنا. النيل ليس مجرد نهر، بل هو شاهد على حضارتنا ورفيق دربنا إلى الأبد. ينبع من قلب أفريقيا ويسير ستة آلاف وستمئة وخمسين كيلومتراً ليصب في البحر المتوسط، حاملاً معه الخصوبة والحياة. على ضفافه قامت أعظم المدن، وفي مياهه عبرت السفن المحمّلة بالذهب والبخور، ومنه شرب الفلاح والملك على السواء.",

    "modern.title": "نهضة تتجدد",
    "modern.desc":
      "كما بنينا الأهرامات بالأمس، نبني اليوم ناطحات السحاب والمتاحف العظيمة. روح مصر لا تشيخ، بل تتجدد مع كل جيل. العاصمة الإدارية الجديدة ترتفع كأنها هرم القرن الحادي والعشرين، وقناة السويس الجديدة تشق الصحراء لتربط الشرق بالغرب، والمتحف المصري الكبير يحتضن كنوز الفراعنة في صرح يليق بعظمتهم.",

    "people.title": "روح مصر",
    "people.desc":
      "في ابتسامة فلاح، وإصرار عالم، وعزيمة رياضي. أعظم ثروات مصر هي شعبها الأصيل، صانع المعجزات في كل زمان ومكان. شعب يعرف الكرم قبل أن يعرف الجوع، ويعرف الضحكة قبل أن يعرف الألم. شعب علّم العالم الصبر، وعلّم التاريخ كيف يُكتب بحبر من نور.",

    "gallery.title": "لمحات من الخلود",

    /* ---------- HISTORY PAGE ---------- */
    "history.hero.title": "تاريخ مصر عبر العصور",
    "history.hero.subtitle": "سبعة آلاف عام من المجد المتواصل",
    "history.intro":
      "تنفرد مصر بأنها الدولة الوحيدة في العالم التي حافظت على هويتها واسمها وحدودها منذ فجر التاريخ. مرّت على أرضها حضارات عظيمة، وتركت كل واحدة بصمتها، لكن الروح المصرية ظلّت واحدة، شامخة، خالدة.",

    "era1.title": "العصر الفرعوني",
    "era1.years": "3100 ق.م – 332 ق.م",
    "era1.desc":
      "بدأ بتوحيد الملك مينا للقطرين الشمالي والجنوبي ليؤسس أول دولة مركزية في التاريخ. شهد هذا العصر بناء أهرامات الجيزة في عهد خوفو، وعصر التحوّل في عهد إخناتون، ومجد الإمبراطورية في عهد رمسيس الثاني. ترك الفراعنة للبشرية الكتابة الهيروغليفية، والتقويم الشمسي، وأسس الطب والجراحة، وفنون العمارة التي ما زالت تذهل العالم.",

    "era2.title": "العصر اليوناني الروماني",
    "era2.years": "332 ق.م – 641 م",
    "era2.desc":
      "دخل الإسكندر الأكبر مصر فاتحاً ومحرراً من الحكم الفارسي، وأسس مدينة الإسكندرية التي أصبحت منارة العلم في العالم القديم. حكم البطالمة من بعده، وفي عهدهم بُنيت مكتبة الإسكندرية ومنارتها التي عُدّت من عجائب الدنيا السبع. ثم انتقلت مصر إلى الحكم الروماني بعد كليوباترا، وظلّت سلّة غلال الإمبراطورية.",

    "era3.title": "العصر القبطي",
    "era3.years": "القرن الأول – السابع الميلادي",
    "era3.desc":
      "احتضنت مصر المسيحية مبكراً، وأسس فيها القديس مرقس أول كنيسة. ازدهرت الرهبنة المصرية على يد الأنبا أنطونيوس وصارت نموذجاً يُحتذى به في العالم كله. خلّف الأقباط فنوناً ونسيجاً ومخطوطات ما زالت محفوظة في المتاحف العالمية حتى اليوم.",

    "era4.title": "العصر الإسلامي",
    "era4.years": "641 م – 1798 م",
    "era4.desc":
      "دخل عمرو بن العاص مصر فاتحاً، وأسّس مدينة الفسطاط، أول عاصمة إسلامية في إفريقيا. تعاقبت الدول: الأمويون، العباسيون، الطولونيون، الإخشيديون، الفاطميون الذين أسّسوا القاهرة المعزّية وجامع الأزهر، الأيوبيون بقيادة صلاح الدين، المماليك الذين هزموا التتار في عين جالوت، ثم العثمانيون. خلّف هذا العصر القاهرة الإسلامية بمساجدها ومدارسها التي تُعدّ متحفاً مفتوحاً للفن الإسلامي.",

    "era5.title": "العصر الحديث",
    "era5.years": "1805 م – اليوم",
    "era5.desc":
      "بدأت النهضة الحديثة على يد محمد علي باشا، مؤسس مصر الحديثة، الذي بنى الجيش والصناعة والتعليم. ثم جاءت ثورة 1919 بقيادة سعد زغلول، وثورة يوليو 1952 التي أعلنت الجمهورية. شهدت مصر تأميم قناة السويس، وحرب أكتوبر المجيدة 1973 التي أعادت لمصر أرضها وكرامتها. واليوم تُكمل مصر مسيرة التحديث بمشاريع عملاقة تربط الماضي بالمستقبل.",

    /* ---------- LANDMARKS PAGE ---------- */
    "landmarks.hero.title": "معالم وآثار مصر",
    "landmarks.hero.subtitle": "حجارة تنطق بالتاريخ",
    "landmarks.intro":
      "تضمّ مصر ثلث آثار العالم، وعلى أرضها تنتشر معالم تحكي قصة الإنسان منذ أن عرف الحضارة. من أهرامات الجيزة إلى معابد النوبة، ومن القاهرة الفاطمية إلى الإسكندرية البطلمية، كل بقعة شاهدة على عظمة الأجداد.",

    "lm1.title": "أهرامات الجيزة",
    "lm1.desc":
      "العجيبة الوحيدة الباقية من عجائب الدنيا السبع القديمة. بُنيت قبل أربعة آلاف وخمسمئة عام، ولا يزال العلم حتى اليوم يقف عاجزاً أمام دقة بنائها. الهرم الأكبر هرم خوفو يضمّ أكثر من مليونين وثلاثمئة ألف حجر، ويزن الحجر الواحد أكثر من طنين، ومع ذلك جاءت زواياه قائمة بدقة لا تتجاوز الجزء من الألف.",

    "lm2.title": "أبو سمبل",
    "lm2.desc":
      "معبد رمسيس الثاني المنحوت في الجبل، تحفة هندسية تشهد على عبقرية الفراعنة. صُمّم بدقة فلكية مذهلة بحيث تتعامد الشمس على وجه الملك مرتين في العام، في الحادي والعشرين من فبراير وأكتوبر، يوم ميلاده ويوم تتويجه. أُنقذ المعبد في الستينيات بعملية رفع وإعادة بناء وُصِفت بأنها أعجوبة الهندسة الحديثة.",

    "lm3.title": "معابد الأقصر والكرنك",
    "lm3.desc":
      "أكبر معبد ديني في العالم القديم، يمتدّ على مساحة تزيد على مئة هكتار. صالة الأعمدة الكبرى وحدها تضمّ مئة وأربعة وثلاثين عموداً يبلغ ارتفاع بعضها أكثر من عشرين متراً. كل ملك من ملوك الدولة الحديثة أضاف إليه شيئاً، فأصبح موسوعة حجرية تروي ألفي عام من تاريخ مصر.",

    "lm4.title": "القاهرة التاريخية",
    "lm4.desc":
      "أكبر متحف مفتوح للعمارة الإسلامية في العالم. أسّسها الفاطميون عام تسعمئة وتسعة وستين ميلادية، وفيها جامع الأزهر أقدم جامعة في العالم لا تزال تعمل، ومسجد ابن طولون، وقلعة صلاح الدين، وشارع المعز الذي يعدّ متحفاً مفتوحاً للفنون الإسلامية على اختلاف عصورها.",

    "lm5.title": "المتحف المصري الكبير",
    "lm5.desc":
      "أكبر متحف في العالم مخصّص لحضارة واحدة، يحتضن أكثر من مئة ألف قطعة أثرية، من بينها كنوز الملك توت عنخ آمون كاملة لأول مرة. صُمّم على شكل مثلث يحاكي الأهرامات، ويطلّ عليها مباشرة، ليكون جسراً بين الماضي والحاضر في آن واحد.",

    "lm6.title": "الإسكندرية",
    "lm6.desc":
      "عروس البحر المتوسط، أسّسها الإسكندر الأكبر لتكون عاصمة العالم. حملت منارتها أحد أقدم رموز عجائب الدنيا، وحملت مكتبتها أعظم كنوز المعرفة في التاريخ القديم. واليوم تحيي مكتبة الإسكندرية الجديدة هذا الإرث، وتعود المدينة منارة للعلم والثقافة من جديد.",

    /* ---------- MODERN PAGE ---------- */
    "modern.hero.title": "مصر الحديثة",
    "modern.hero.subtitle": "نهضة تليق بأم الدنيا",
    "modern.intro":
      "تخوض مصر اليوم معركة البناء على كل الجبهات. مشروعات قومية عملاقة، وتوسّع عمراني غير مسبوق، وقفزات في التعليم والصحة والطاقة المتجدّدة. مصر التي بنت الأهرامات بالأمس، تبني اليوم مدناً جديدة، وقنوات، ومحطّات طاقة، ومتاحف، تشهد للعالم أن الحضارة لا تموت في أرض الكنانة.",

    "ach1.title": "العاصمة الإدارية الجديدة",
    "ach1.desc":
      "مدينة من الجيل الرابع تُبنى من الصفر على مساحة سبعمئة كيلومتر مربع، وتضمّ أطول برج في إفريقيا، ومسجد مصر، وكاتدرائية ميلاد المسيح، أكبر كنيسة في الشرق الأوسط. مشروع يجسّد طموح مصر في صناعة عاصمة ذكية تواكب القرن الحادي والعشرين.",

    "ach2.title": "قناة السويس الجديدة",
    "ach2.desc":
      "أُنجزت في عام واحد فقط، وأضافت إلى القناة الأصلية مجرى موازياً يسمح بمرور السفن في الاتجاهين معاً. اختصرت زمن الانتظار من ثماني عشرة ساعة إلى ثلاث ساعات فقط، وضاعفت إيرادات القناة، وأكّدت للعالم أن مصر قادرة على تحقيق المستحيل.",

    "ach3.title": "المتحف المصري الكبير",
    "ach3.desc":
      "افتتاح حضاري يعيد لمصر مكانتها كعاصمة للسياحة الثقافية في العالم. عُرضت فيه مومياوات الملوك في موكب مهيب شاهده مليار إنسان حول العالم، ليؤكد أن مصر ما زالت قادرة على صناعة الأحداث التي تخطف أنظار البشرية.",

    "ach4.title": "علماء ورياضيون",
    "ach4.desc":
      "من الدكتور أحمد زويل الحاصل على نوبل في الكيمياء، إلى الدكتور مجدي يعقوب رائد جراحة القلب، إلى محمد صلاح أيقونة كرة القدم العالمية، وفريد العطار وأمم بطولات السباحة. يثبت أبناء مصر في كل ميدان أن الجينات الفرعونية ما زالت تصنع العظماء.",

    "ach5.title": "العاصمة الثقافية",
    "ach5.desc":
      "صناعة سينمائية هي الأقدم في الشرق الأوسط، وفنانون تركوا بصمة عابرة للحدود من أم كلثوم إلى عبد الحليم حافظ إلى نجيب محفوظ الحاصل على نوبل في الأدب. مصر هوليوود الشرق، ومنبع الفن العربي منذ أكثر من قرن.",

    "ach6.title": "الطاقة والمستقبل",
    "ach6.desc":
      "محطّة بنبان للطاقة الشمسية من أكبر محطّات الطاقة المتجدّدة في العالم. مشروع المحطّة النووية في الضبعة سيُدخل مصر نادي الدول النووية السلمية. مصر تستعد لمستقبل تكون فيه قائدة في الطاقة النظيفة على مستوى المنطقة.",

    /* ---------- ABOUT PAGE ---------- */
    "about.hero.title": "عن المبادرة",
    "about.hero.subtitle": "بكلّ فخر… من أجل مصر",
    "about.vision.title": "رؤيتنا",
    "about.vision.desc":
      "أن يعرف كل مصري، صغيراً كان أم كبيراً، أنه يحمل في صدره إرثاً عمره سبعة آلاف عام، وأن يعرف العالم أن مصر ليست بلداً عادياً، بل هي أمّ الحضارات وقلب التاريخ النابض. هذه المبادرة دعوة للفخر، ودعوة للعمل، ودعوة للحبّ.",

    "about.why.title": "لماذا هذه المبادرة؟",
    "about.why.desc":
      "لأن مصر تستحقّ أن يُحكى عنها بكل اللغات، وأن تُروى قصّتها لكل جيل. لأن أبناءها هم سفراؤها، وكلمتهم هي أقوى ترجمة لعظمتها. ولأن من لا يعرف ماضيه لا يستطيع أن يصنع مستقبله، فإن استعادة الفخر بالهوية المصرية هي الخطوة الأولى نحو نهضة شاملة.",

    "about.values.title": "قيمنا",
    "about.values.heritage": "الإرث",
    "about.values.heritage_desc":
      "نحفظ ذاكرة الأجداد ونصونها لأجيال المستقبل.",
    "about.values.pride": "الفخر",
    "about.values.pride_desc":
      "نرفع رايتنا عالياً ونعتزّ بهويتنا في كل محفل.",
    "about.values.future": "المستقبل",
    "about.values.future_desc":
      "نصنع غداً مشرقاً يليق بعظمة الماضي وتطلّعات الحاضر.",
    "about.values.unity": "الوحدة",
    "about.values.unity_desc":
      "نؤمن أن مصر للجميع، وأن قوّتها في تنوّعها واتّحادها.",

    "about.creator.title": "صانع المبادرة",
    "about.creator.desc":
      "موقع من تصميم وتنفيذ الطالب معاذ محسن عبدالله، طالب في الصف السادس الابتدائي بمدرسة الرحمن الخاصة، تحت إشراف مديرة المدرسة الأستاذة شيرين عبد الجواد الديب. أراد معاذ أن يقدّم لمصر ما يستطيع، فقدّم حبّه على شكل صفحات وكلمات وصور.",

    "about.thanks.title": "شكر وتقدير",
    "about.thanks.desc":
      "كل الشكر لمدرسة الرحمن الخاصة على دعمها للطلاب وتشجيعها لمشاريعهم الإبداعية. وكل الشكر لمديرة المدرسة الأستاذة شيرين عبد الجواد الديب على رعايتها وحرصها على إبراز مواهب أبنائها. والشكر الأكبر لمصر، الأم التي أنجبتنا جميعاً.",

    /* ---------- Footer ---------- */
    "footer.text": "صنع بكل فخر من أجل مصر",
    "by.text": "صنع الطالب معاذ محسن عبدالله",
    "j6.text": "طالب في الصف السادس الابتدائي",
    "school.text": "مدرسة الرحمن الخاصة",
    "leader_school.text": "مديرة المدرسة شيرين عبد الجواد الديب",

    "quote.history": "يا لها من أمة، عاشت سبعة آلاف عام، ولا تزال شابّة كأنها وُلدت اليوم.",
    "quote.author": "— ول ديورانت، مؤرخ الحضارة",

    "lang.toggle": "EN",
  },

  en: {
    /* ---------- Navigation & Brand ---------- */
    "brand": "EGYPT",
    "nav.home": "Home",
    "nav.history": "History",
    "nav.landmarks": "Landmarks",
    "nav.modern": "Renaissance",
    "nav.about": "About",

    /* ---------- HOME PAGE ---------- */
    "hero.title": "The Glory and Majesty of Egypt",
    "hero.subtitle": "A 7,000-year legacy illuminating the future",
    "hero.cta": "Discover Eternity",

    "intro.title": "Mother of the World",
    "intro.desc":
      "Egypt is not merely a country; it is humanity's first story. She is the teacher who gave the world writing, medicine, astronomy, and engineering. On the banks of her Nile, the first civilization known to history was born. From her mountains came the gold that adorned the palaces of kings, and in her desert rose the greatest structure ever built. To write about Egypt is to write about the beginning, the end, and eternity itself.",

    "stats.title": "Numbers That Speak",
    "stats.years": "Years of Civilization",
    "stats.nile": "Length of the Nile (km)",
    "stats.pyramids": "Pyramids of Giza",
    "stats.unesco": "UNESCO World Heritage Sites",

    "ancient.title": "Dawn of History",
    "ancient.desc":
      "Where time began, our ancestors left miracles carved in stone, defying mortality and telling the story of a nation that taught humanity the meaning of eternity. From the towering Pyramids of Giza, to the majestic Karnak temples, to the Valley of the Kings that still guards the secrets of pharaohs, every stone whispers a story and every inscription tells a heroic tale. The ancient Egyptians built a civilization that endured uninterrupted for three thousand years — a record no other people on earth has ever matched.",

    "nile.title": "The River of Life",
    "nile.desc":
      "A gift from heaven, it flows in our veins before flowing through our lands. The Nile is not just a river; it is a witness to our civilization and our eternal companion. Rising from the heart of Africa, it travels six thousand six hundred and fifty kilometers before meeting the Mediterranean, carrying with it fertility and life. The greatest cities rose on its banks, ships laden with gold and incense crossed its waters, and from it both the farmer and the king have always drunk.",

    "modern.title": "A Renewed Renaissance",
    "modern.desc":
      "Just as we built the pyramids yesterday, today we build skyscrapers and grand museums. The spirit of Egypt does not age; it renews with every generation. The New Administrative Capital rises like a pyramid of the twenty-first century, the New Suez Canal cuts through the desert linking East and West, and the Grand Egyptian Museum shelters the treasures of the pharaohs in a monument worthy of their grandeur.",

    "people.title": "The Soul of Egypt",
    "people.desc":
      "In the smile of a farmer, the persistence of a scientist, and the determination of an athlete. Egypt's greatest wealth is its authentic people, the miracle-makers in every era. A people who knew generosity before they knew hunger, and laughter before they knew pain. A people who taught the world patience, and taught history how to be written in ink of light.",

    "gallery.title": "Glimpses of Eternity",

    /* ---------- HISTORY PAGE ---------- */
    "history.hero.title": "Egypt Through the Ages",
    "history.hero.subtitle": "Seven millennia of unbroken glory",
    "history.intro":
      "Egypt stands alone as the only nation that has preserved her identity, her name, and her borders since the dawn of history. Great civilizations have crossed her soil and each left its imprint, yet the Egyptian spirit has remained one — proud, towering, eternal.",

    "era1.title": "The Pharaonic Era",
    "era1.years": "3100 BC – 332 BC",
    "era1.desc":
      "It began when King Menes united Upper and Lower Egypt to found the world's first central state. This era saw the building of the Pyramids of Giza under Khufu, the spiritual revolution of Akhenaten, and the imperial glory of Ramesses II. The pharaohs gave humanity hieroglyphic writing, the solar calendar, the foundations of medicine and surgery, and architectural arts that still astonish the world.",

    "era2.title": "The Greco-Roman Era",
    "era2.years": "332 BC – 641 AD",
    "era2.desc":
      "Alexander the Great entered Egypt as both conqueror and liberator from Persian rule, founding Alexandria, which became the lighthouse of learning in the ancient world. The Ptolemies ruled after him, building the Library of Alexandria and the Lighthouse, one of the Seven Wonders of the World. After Cleopatra, Egypt passed to Roman rule and remained the breadbasket of the empire.",

    "era3.title": "The Coptic Era",
    "era3.years": "1st – 7th Century AD",
    "era3.desc":
      "Egypt embraced Christianity early, and Saint Mark established her first church. Egyptian monasticism flourished under Saint Anthony and became a model for the entire world. The Copts left behind arts, textiles, and manuscripts that are still preserved in museums worldwide today.",

    "era4.title": "The Islamic Era",
    "era4.years": "641 AD – 1798 AD",
    "era4.desc":
      "Amr ibn al-As entered Egypt as a conqueror and founded Fustat, the first Islamic capital in Africa. Dynasties followed in succession: Umayyads, Abbasids, Tulunids, Ikhshidids, Fatimids who founded Cairo and Al-Azhar Mosque, Ayyubids led by Saladin, Mamluks who defeated the Mongols at Ain Jalut, then the Ottomans. This era left Islamic Cairo with its mosques and madrasas — an open-air museum of Islamic art.",

    "era5.title": "The Modern Era",
    "era5.years": "1805 AD – Today",
    "era5.desc":
      "The modern renaissance began with Muhammad Ali Pasha, founder of modern Egypt, who built the army, industry, and education. Then came the 1919 revolution led by Saad Zaghloul, and the 1952 July revolution that proclaimed the Republic. Egypt witnessed the nationalization of the Suez Canal, and the glorious October War of 1973 which restored Egypt's land and dignity. Today Egypt continues her path of modernization with massive projects connecting the past to the future.",

    /* ---------- LANDMARKS PAGE ---------- */
    "landmarks.hero.title": "Landmarks of Egypt",
    "landmarks.hero.subtitle": "Stones that speak of history",
    "landmarks.intro":
      "Egypt holds one third of the world's antiquities, and across her land stand monuments that tell humanity's story since the very beginning of civilization. From the Pyramids of Giza to the temples of Nubia, from Fatimid Cairo to Ptolemaic Alexandria, every place is a witness to the greatness of the ancestors.",

    "lm1.title": "The Pyramids of Giza",
    "lm1.desc":
      "The only surviving wonder of the ancient Seven Wonders of the World. Built four thousand five hundred years ago, modern science still stands in awe of their precision. The Great Pyramid of Khufu contains over two million three hundred thousand blocks, each weighing more than two tons, yet its corners are perfectly aligned within a fraction of a degree.",

    "lm2.title": "Abu Simbel",
    "lm2.desc":
      "The temple of Ramesses II carved into the mountain — an engineering marvel testifying to pharaonic genius. It was designed with such astronomical precision that the sun aligns perfectly on the king's face twice a year, on the twenty-first of February and October — his birth and coronation days. In the 1960s the temple was relocated stone by stone in what was hailed as a miracle of modern engineering.",

    "lm3.title": "Luxor & Karnak",
    "lm3.desc":
      "The largest religious complex in the ancient world, covering more than one hundred hectares. Its Great Hypostyle Hall alone contains one hundred and thirty-four columns, some rising over twenty meters. Every king of the New Kingdom added something to it, turning it into a stone encyclopedia of two thousand years of Egyptian history.",

    "lm4.title": "Historic Cairo",
    "lm4.desc":
      "The world's largest open-air museum of Islamic architecture. Founded by the Fatimids in 969 AD, it holds Al-Azhar Mosque — the oldest still-functioning university in the world — the Mosque of Ibn Tulun, the Citadel of Saladin, and Al-Muizz Street, an open exhibition of Islamic art across the ages.",

    "lm5.title": "Grand Egyptian Museum",
    "lm5.desc":
      "The largest museum in the world dedicated to a single civilization, hosting more than one hundred thousand artifacts including, for the first time ever, the complete treasures of King Tutankhamun. Designed as a triangle echoing the pyramids and overlooking them directly, it stands as a bridge between past and present.",

    "lm6.title": "Alexandria",
    "lm6.desc":
      "The bride of the Mediterranean, founded by Alexander the Great to be a capital of the world. Her lighthouse stood among the Seven Wonders, and her library held the greatest treasures of ancient knowledge. Today the new Bibliotheca Alexandrina revives that legacy, restoring the city as a beacon of learning and culture.",

    /* ---------- MODERN PAGE ---------- */
    "modern.hero.title": "Modern Egypt",
    "modern.hero.subtitle": "A renaissance worthy of the Mother of the World",
    "modern.intro":
      "Egypt today fights the battle of building on every front. Mega national projects, unprecedented urban expansion, leaps in education, healthcare, and renewable energy. The Egypt that built the pyramids yesterday is today building new cities, canals, power stations, and museums — proving to the world that civilization never dies in this land.",

    "ach1.title": "New Administrative Capital",
    "ach1.desc":
      "A fourth-generation city built from scratch on seven hundred square kilometers, hosting Africa's tallest tower, the Mosque of Egypt, and the Cathedral of the Nativity of Christ — the largest church in the Middle East. A project embodying Egypt's ambition to craft a smart capital fit for the twenty-first century.",

    "ach2.title": "New Suez Canal",
    "ach2.desc":
      "Completed in just one year, it added a parallel waterway allowing ships to pass in both directions simultaneously. Waiting time dropped from eighteen hours to only three, canal revenues doubled, and the world was reminded that Egypt can deliver the impossible.",

    "ach3.title": "Grand Egyptian Museum",
    "ach3.desc":
      "A civilizational opening that restores Egypt's place as the world capital of cultural tourism. The Royal Mummies Parade was watched by over a billion people across the globe, proving that Egypt still creates events that capture humanity's gaze.",

    "ach4.title": "Scientists & Athletes",
    "ach4.desc":
      "From Dr. Ahmed Zewail, Nobel laureate in chemistry, to Dr. Magdi Yacoub, pioneer of heart surgery, to Mohamed Salah, the global football icon, and Farida Osman, queen of swimming championships. Egypt's children prove in every field that pharaonic genes still produce greatness.",

    "ach5.title": "Cultural Capital",
    "ach5.desc":
      "The oldest cinema industry in the Middle East, and artists who left a mark across borders — from Umm Kulthum, to Abdel Halim Hafez, to Naguib Mahfouz, Nobel laureate in literature. Egypt is the Hollywood of the East and the wellspring of Arab art for over a century.",

    "ach6.title": "Energy & the Future",
    "ach6.desc":
      "Benban Solar Park is one of the largest renewable energy stations in the world. The Dabaa nuclear project will admit Egypt to the club of peaceful nuclear nations. Egypt prepares for a future as a regional leader in clean energy.",

    /* ---------- ABOUT PAGE ---------- */
    "about.hero.title": "About the Initiative",
    "about.hero.subtitle": "With pride… for Egypt",
    "about.vision.title": "Our Vision",
    "about.vision.desc":
      "That every Egyptian, young or old, knows they carry within them a heritage seven thousand years old, and that the world knows Egypt is not just any country, but the mother of civilizations and the beating heart of history. This initiative is a call to pride, to action, and to love.",

    "about.why.title": "Why This Initiative?",
    "about.why.desc":
      "Because Egypt deserves to be told of in every language, and her story deserves to be told to every generation. Because her children are her ambassadors, and their voice is the strongest translation of her greatness. And because those who do not know their past cannot build their future, restoring pride in Egyptian identity is the first step toward a complete renaissance.",

    "about.values.title": "Our Values",
    "about.values.heritage": "Heritage",
    "about.values.heritage_desc":
      "We preserve the memory of our ancestors for generations to come.",
    "about.values.pride": "Pride",
    "about.values.pride_desc":
      "We raise our flag high and honor our identity in every arena.",
    "about.values.future": "Future",
    "about.values.future_desc":
      "We craft a bright tomorrow worthy of the past and the present.",
    "about.values.unity": "Unity",
    "about.values.unity_desc":
      "We believe Egypt is for all, and her strength lies in her diversity and unity.",

    "about.creator.title": "The Creator",
    "about.creator.desc":
      "This website was designed and built by student Moaaz Mohsen Abdallah, a sixth-grade pupil at Al Rahman Private School, under the supervision of the school principal Mrs. Sherine Abdel Gawad El Deeb. Moaaz wanted to give Egypt what he could, so he gave his love in the form of pages, words, and images.",

    "about.thanks.title": "Acknowledgments",
    "about.thanks.desc":
      "Heartfelt thanks to Al Rahman Private School for supporting its students and encouraging their creative projects. Deepest thanks to the school principal Mrs. Sherine Abdel Gawad El Deeb for her care and dedication in showcasing the talents of her pupils. The greatest thanks of all go to Egypt — the mother who gave birth to us all.",

    /* ---------- Footer ---------- */
    "footer.text": "Made With Pride For Egypt",
    "by.text": "By Student Moaaz Mohsen Abdallah",
    "j6.text": "Sixth Grade Student",
    "school.text": "Al Rahman Private School",
    "leader_school.text": "School Principal Sherine Abdel Gawad El Deeb",

    "quote.history": "What a nation — seven thousand years old, yet still as young as if she were born today.",
    "quote.author": "— Will Durant, historian of civilization",

    "lang.toggle": "عربي",
  },
};

const STORAGE_KEY = "app-lang";
const BOOTSTRAP_RTL =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
const BOOTSTRAP_LTR =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

/* ---------- Language ---------- */
function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "ar" || saved === "en" ? saved : "ar";
}

function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  const bsLink = document.getElementById("bootstrap-css");
  if (bsLink) {
    bsLink.setAttribute("href", lang === "ar" ? BOOTSTRAP_RTL : BOOTSTRAP_LTR);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = translations[lang]["lang.toggle"];

  const titleKey = document.documentElement.getAttribute("data-page-title-key");
  const baseTitle = titleKey && translations[lang][titleKey]
    ? translations[lang][titleKey]
    : translations[lang]["hero.title"];
  document.title = `${baseTitle} | Egypt`;

  localStorage.setItem(STORAGE_KEY, lang);
}

function toggleLanguage() {
  const current = document.documentElement.getAttribute("lang") || "ar";
  applyLanguage(current === "ar" ? "en" : "ar");
}

/* ---------- Sticky navbar on scroll ---------- */
function setupNavbarScroll() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Hero parallax + fade ---------- */
function setupHeroParallax() {
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) return;

  const onScroll = () => {
    const y = window.scrollY;
    const translate = Math.min(y * 0.35, 300);
    const opacity = Math.max(1 - y / 600, 0);
    heroBg.style.transform = `translate3d(0, ${translate}px, 0) scale(1.05)`;
    heroBg.style.opacity = opacity.toString();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Reveal-on-scroll ---------- */
function setupReveals() {
  const targets = document.querySelectorAll(
    ".content-section .row > [class*='col-'], .content-section .text-center, .stat-card, .value-card, .timeline-item"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------- Auto-close mobile navbar on link click ---------- */
function setupNavbarAutoClose() {
  const collapseEl = document.getElementById("mainNav");
  if (!collapseEl) return;

  collapseEl.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (collapseEl.classList.contains("show")) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(collapseEl) ||
          new bootstrap.Collapse(collapseEl, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
}

/* ---------- Animated counters (stats) ---------- */
function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute("data-counter"), 10);
    const duration = 1800;
    const start = performance.now();
    const startVal = 0;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => observer.observe(el));
}

/* ---------- Highlight active nav link ---------- */
function setupActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#mainNav a.nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ---------- Background music (continues across pages) ---------- */
const MUSIC_TIME_KEY = "bg-music-time";
const MUSIC_PAUSED_KEY = "bg-music-paused";

function setupBackgroundMusic() {
  const audio = document.getElementById("bg-music");
  if (!audio) return;

  // Restore last position
  const savedTime = parseFloat(localStorage.getItem(MUSIC_TIME_KEY) || "0");
  const wasPaused = localStorage.getItem(MUSIC_PAUSED_KEY) === "1";

  const setStartTime = () => {
    if (!isNaN(savedTime) && savedTime > 0 && isFinite(audio.duration)) {
      try {
        audio.currentTime = Math.min(savedTime, Math.max(audio.duration - 0.5, 0));
      } catch (_) { /* ignore */ }
    }
  };

  if (audio.readyState >= 1) {
    setStartTime();
  } else {
    audio.addEventListener("loadedmetadata", setStartTime, { once: true });
  }

  audio.volume = 0.55;

  // Try to autoplay (works after first user gesture on the domain)
  const tryPlay = () => {
    if (wasPaused) return;
    const p = audio.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        // Autoplay blocked: start on first user interaction
        const onFirstInteract = () => {
          audio.play().catch(() => {});
          window.removeEventListener("click", onFirstInteract);
          window.removeEventListener("touchstart", onFirstInteract);
          window.removeEventListener("keydown", onFirstInteract);
        };
        window.addEventListener("click", onFirstInteract, { once: true });
        window.addEventListener("touchstart", onFirstInteract, { once: true });
        window.addEventListener("keydown", onFirstInteract, { once: true });
      });
    }
  };
  tryPlay();

  // Save position periodically while playing
  let lastSave = 0;
  audio.addEventListener("timeupdate", () => {
    const now = Date.now();
    if (now - lastSave > 800) {
      lastSave = now;
      localStorage.setItem(MUSIC_TIME_KEY, audio.currentTime.toFixed(2));
    }
  });

  audio.addEventListener("play", () => {
    localStorage.setItem(MUSIC_PAUSED_KEY, "0");
  });

  audio.addEventListener("pause", () => {
    localStorage.setItem(MUSIC_PAUSED_KEY, "1");
    localStorage.setItem(MUSIC_TIME_KEY, audio.currentTime.toFixed(2));
  });

  // Save on unload so the next page picks up exactly where we left off
  const saveOnExit = () => {
    if (!isNaN(audio.currentTime)) {
      localStorage.setItem(MUSIC_TIME_KEY, audio.currentTime.toFixed(2));
    }
  };
  window.addEventListener("pagehide", saveOnExit);
  window.addEventListener("beforeunload", saveOnExit);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveOnExit();
  });
}

/* ---------- Init ---------- */
function init() {
  applyLanguage(getInitialLang());

  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.addEventListener("click", toggleLanguage);

  setupNavbarScroll();
  setupHeroParallax();
  setupReveals();
  setupNavbarAutoClose();
  setupCounters();
  setupActiveNav();
  setupBackgroundMusic();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
