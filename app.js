document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fr: {
      nav: { home: "Accueil", shop: "Boutique", ingredients: "Actifs", story: "Notre histoire", cafe: "CaféConseils" },
      hero: {
        badgeNatural: "100% naturel",
        badgeMaternity: "Pregnancy Safe",
        eyebrow: "Clean beauty marocaine",
        title: "L’éclat naturel, <em>même pendant la maternité</em>",
        text: "Des soins naturels hautement sensoriels, formulés par Nisrine pour révéler une peau saine, lumineuse et sereine pendant toutes les étapes de vie.",
        cta: "Découvrir les soins",
        secondary: "L’histoire de Nisrine",
        floatTitle: "Éclat haute tolérance",
        floatText: "Clean, naturel, grossesse safe",
      },
      proof: { natural: "d’ingrédients d’origine naturelle", clean: "parabènes, sulfates, silicones", safe: "maternity friendly" },
      trust: {
        natural: "Naturel exigeant",
        naturalText: "Actifs sélectionnés avec soin.",
        maternity: "Pregnancy Safe",
        maternityText: "Pensé pour les périodes sensibles.",
        cruelty: "Cruelty Free",
        crueltyText: "Jamais testé sur les animaux.",
        morocco: "Fabriqué au Maroc",
        moroccoText: "Un savoir-faire clean beauty local.",
      },
      shop: {
        eyebrow: "Boutique",
        title: "Les essentiels NISECLAT",
        text: "Une sélection courte, premium et performante : éclat, hydratation, peau douce et protection naturelle.",
      },
      filters: { all: "Tous", glow: "Éclat", hydration: "Hydratation", acne: "Acné", maternity: "Grossesse" },
      product: { safe: "Pregnancy Safe", add: "Ajouter au panier", added: "✓ Ajouté au panier" },
      ingredients: {
        eyebrow: "Ingredient spotlight",
        title: "Nos actifs d’exception",
        text: "Des ingrédients lisibles, choisis pour leur efficacité cutanée et leur douceur.",
        found: "Trouvé dans →",
      },
      story: {
        badge: "2 ans de R&D",
        eyebrow: "Notre histoire",
        title: "Une formule née entre spa, peau et maquillage",
        p1: "Makeup artiste, professeure en soins de la peau et propriétaire de spa, Nisrine voit chaque jour la même vérité : la beauté commence par une peau équilibrée.",
        p2: "Après deux ans de tests rigoureux sur elle-même, elle crée des soins naturels validés en parapharmacie, désormais accessibles aux routines personnelles.",
      },
      ritual: { eyebrow: "Rituel", title: "Quatre gestes, une peau prête à rayonner" },
      cafe: {
        eyebrow: "CaféConseils",
        title: "Le journal peau de Nisrine",
        text: "Conseils courts, likes, commentaires et questions de la communauté pour mieux choisir vos soins.",
        featureBadge: "Guide grossesse",
        featureTitle: "Pourquoi l’éclat commence avant le maquillage",
        featureText: "Une peau préparée reflète mieux la lumière et garde un fini naturel toute la journée.",
      },
      comments: {
        eyebrow: "Communauté",
        title: "Posez votre question peau",
        nameLabel: "Prénom",
        messageLabel: "Question",
        name: "Votre prénom",
        message: "Votre question ou retour d’expérience",
        submit: "Publier",
        seedName: "Nisrine",
        seedMessage: "Pendant la grossesse, gardez une routine courte : nettoyer, hydrater, protéger. La régularité fait l’éclat.",
        time: "Il y a 2h",
      },
      footer: {
        text: "Clean beauty marocaine, naturelle, sensorielle et pensée pour les peaux exigeantes.",
        shop: "Boutique",
        advice: "Conseils",
        newsletter: "Newsletter",
        newsletterText: "Recevez conseils et offres privées.",
      },
      newsletter: { emailLabel: "Email", email: "Votre email" },
      popup: {
        badge: "Maternity safe",
        title: "-15% sur votre première routine naturelle",
        text: "Rejoignez le carnet privé de Nisrine : conseils peau, offres confidentielles et routines pregnancy safe.",
        cta: "Recevoir mon offre",
      },
    },
    en: {
      nav: { home: "Home", shop: "Shop", ingredients: "Actives", story: "Our story", cafe: "CafeAdvice" },
      hero: {
        badgeNatural: "100% natural",
        badgeMaternity: "Pregnancy Safe",
        eyebrow: "Moroccan clean beauty",
        title: "Natural radiance, <em>even during maternity</em>",
        text: "Highly sensory natural care, formulated by Nisrine to reveal healthy, luminous and serene skin through every life stage.",
        cta: "Discover the range",
        secondary: "Nisrine’s story",
        floatTitle: "High-tolerance glow",
        floatText: "Clean, natural, pregnancy safe",
      },
      proof: { natural: "naturally derived ingredients", clean: "parabens, sulfates, silicones", safe: "maternity friendly" },
      trust: {
        natural: "Demanding naturality",
        naturalText: "Carefully selected actives.",
        maternity: "Pregnancy Safe",
        maternityText: "Designed for sensitive periods.",
        cruelty: "Cruelty Free",
        crueltyText: "Never tested on animals.",
        morocco: "Made in Morocco",
        moroccoText: "Local clean beauty craft.",
      },
      shop: { eyebrow: "Shop", title: "The NISECLAT essentials", text: "A short, premium and high-performance selection: glow, hydration, clear skin and natural protection." },
      filters: { all: "All", glow: "Glow", hydration: "Hydration", acne: "Acne", maternity: "Maternity" },
      product: { safe: "Pregnancy Safe", add: "Add to cart", added: "✓ Added to cart" },
      ingredients: { eyebrow: "Ingredient spotlight", title: "Our exceptional actives", text: "Readable ingredients chosen for skin efficacy and softness.", found: "Found in →" },
      story: {
        badge: "2 years of R&D",
        eyebrow: "Our story",
        title: "A formula born between spa, skin and makeup",
        p1: "As a makeup artist, skincare teacher and spa owner, Nisrine sees the same truth every day: beauty begins with balanced skin.",
        p2: "After two years of rigorous self-testing, she created natural formulas validated in pharmacies and now accessible for personal routines.",
      },
      ritual: { eyebrow: "Ritual", title: "Four gestures, skin ready to radiate" },
      cafe: {
        eyebrow: "CafeAdvice",
        title: "Nisrine’s skin journal",
        text: "Short advice, likes, comments and community questions to choose care more confidently.",
        featureBadge: "Maternity guide",
        featureTitle: "Why glow starts before makeup",
        featureText: "Prepared skin reflects light better and keeps makeup natural all day.",
      },
      comments: {
        eyebrow: "Community",
        title: "Ask your skin question",
        nameLabel: "First name",
        messageLabel: "Question",
        name: "Your first name",
        message: "Your question or experience",
        submit: "Post",
        seedName: "Nisrine",
        seedMessage: "During pregnancy, keep the routine short: cleanse, hydrate, protect. Consistency creates glow.",
        time: "2h ago",
      },
      footer: { text: "Moroccan clean beauty, natural, sensory and designed for demanding skin.", shop: "Shop", advice: "Advice", newsletter: "Newsletter", newsletterText: "Receive advice and private offers." },
      newsletter: { emailLabel: "Email", email: "Your email" },
      popup: { badge: "Maternity safe", title: "15% off your first natural routine", text: "Join Nisrine’s private journal: skin advice, confidential offers and pregnancy-safe routines.", cta: "Get my offer" },
    },
    ar: {
      nav: { home: "الرئيسية", shop: "المتجر", ingredients: "المكونات", story: "قصتنا", cafe: "كافيه النصائح" },
      hero: {
        badgeNatural: "طبيعي 100%",
        badgeMaternity: "آمن للحامل",
        eyebrow: "جمال مغربي نظيف",
        title: "إشراقة طبيعية، <em>حتى أثناء الحمل</em>",
        text: "عناية طبيعية حسية صممتها نسرين لتكشف بشرة صحية ومضيئة وهادئة في كل مراحل الحياة.",
        cta: "اكتشفي المنتجات",
        secondary: "قصة نسرين",
        floatTitle: "إشراقة عالية التحمل",
        floatText: "نظيف، طبيعي، آمن للحمل",
      },
      proof: { natural: "مكونات من أصل طبيعي", clean: "بارابين، كبريتات، سيليكون", safe: "مناسب للحمل" },
      trust: {
        natural: "طبيعة دقيقة",
        naturalText: "مكونات فعالة مختارة بعناية.",
        maternity: "آمن للحامل",
        maternityText: "مصمم للفترات الحساسة.",
        cruelty: "بدون قسوة",
        crueltyText: "غير مجرب على الحيوانات.",
        morocco: "صنع في المغرب",
        moroccoText: "خبرة محلية في الجمال النظيف.",
      },
      shop: { eyebrow: "المتجر", title: "أساسيات NISECLAT", text: "اختيار قصير وفاخر وفعال: إشراقة، ترطيب، بشرة صافية وحماية طبيعية." },
      filters: { all: "الكل", glow: "الإشراقة", hydration: "الترطيب", acne: "حب الشباب", maternity: "الحمل" },
      product: { safe: "آمن للحامل", add: "أضيفي إلى السلة", added: "✓ تمت الإضافة إلى السلة" },
      ingredients: { eyebrow: "إضاءة على المكونات", title: "مكوناتنا الاستثنائية", text: "مكونات واضحة مختارة للفعالية واللطف على البشرة.", found: "موجود في ←" },
      story: {
        badge: "سنتان من البحث",
        eyebrow: "قصتنا",
        title: "تركيبة ولدت بين السبا والبشرة والمكياج",
        p1: "كمختصة مكياج وأستاذة عناية وصاحبة سبا، ترى نسرين كل يوم أن الجمال يبدأ ببشرة متوازنة.",
        p2: "بعد سنتين من الاختبارات الدقيقة على نفسها، ابتكرت تركيبات طبيعية اعتمدت في الصيدليات وأصبحت متاحة للروتين الشخصي.",
      },
      ritual: { eyebrow: "الروتين", title: "أربع خطوات لبشرة جاهزة للإشراق" },
      cafe: {
        eyebrow: "كافيه النصائح",
        title: "دفتر نسرين للبشرة",
        text: "نصائح قصيرة وإعجابات وتعليقات وأسئلة المجتمع لاختيار العناية بثقة.",
        featureBadge: "دليل الحمل",
        featureTitle: "لماذا تبدأ الإشراقة قبل المكياج",
        featureText: "البشرة المحضرة تعكس الضوء أفضل وتحافظ على مكياج طبيعي طوال اليوم.",
      },
      comments: {
        eyebrow: "المجتمع",
        title: "اطرحي سؤال بشرتك",
        nameLabel: "الاسم",
        messageLabel: "السؤال",
        name: "اسمك",
        message: "سؤالك أو تجربتك",
        submit: "نشر",
        seedName: "نسرين",
        seedMessage: "أثناء الحمل، اجعلي الروتين قصيرا: تنظيف، ترطيب، حماية. الاستمرارية تصنع الإشراقة.",
        time: "منذ ساعتين",
      },
      footer: { text: "جمال مغربي نظيف وطبيعي وحسي مصمم للبشرة المتطلبة.", shop: "المتجر", advice: "نصائح", newsletter: "النشرة", newsletterText: "استقبلي النصائح والعروض الخاصة." },
      newsletter: { emailLabel: "البريد الإلكتروني", email: "بريدك الإلكتروني" },
      popup: { badge: "آمن للحامل", title: "خصم 15% على أول روتين طبيعي", text: "انضمي إلى دفتر نسرين الخاص: نصائح البشرة، عروض سرية وروتين آمن للحمل.", cta: "احصل على العرض" },
    },
  };

  const products = [
    {
      id: "vitc",
      image: "assets/images/vitamine-c.png",
      filters: ["all", "glow", "hydration", "maternity"],
      price: "89 MAD",
      oldPrice: "129 MAD",
      likes: 148,
      name: { fr: "Sérum Vitamine C", en: "Vitamin C Serum", ar: "سيروم فيتامين C" },
      benefit: { fr: "Unifie le teint, réduit les taches et ravive l’éclat nocturne.", en: "Evens tone, reduces spots and revives nighttime glow.", ar: "يوحد اللون ويخفف البقع ويعيد الإشراقة ليلا." },
      tags: { fr: ["Orange", "Kiwi", "Figue de Barbarie"], en: ["Orange", "Kiwi", "Figue de Barbarie"], ar: ["برتقال", "كيوي", "تين بربري"] },
    },
    {
      id: "hyaluronic",
      image: "assets/images/serum-hyaluronique.png",
      filters: ["all", "hydration", "maternity"],
      price: "149 MAD",
      oldPrice: "169 MAD",
      likes: 119,
      name: { fr: "Sérum Acide Hyaluronique", en: "Hyaluronic Acid Serum", ar: "سيروم حمض الهيالورونيك" },
      benefit: { fr: "Repulpe, assouplit et gorge la peau d’une hydratation fraîche.", en: "Plumps, softens and floods skin with fresh hydration.", ar: "يمتلئ وينعم البشرة بترطيب منعش." },
      tags: { fr: ["Hydratation", "Jour & Nuit"], en: ["Hydration", "Day & Night"], ar: ["ترطيب", "صباحا ومساء"] },
    },
    {
      id: "goat",
      image: "assets/images/savon-chevre.png",
      filters: ["all", "acne", "glow", "maternity"],
      price: "109 MAD",
      oldPrice: "129 MAD",
      likes: 101,
      name: { fr: "Savon Chèvre", en: "Goat Milk Soap", ar: "صابونة حليب الماعز" },
      benefit: { fr: "Nettoyant et masque doux pour boutons, taches et peau irrégulière.", en: "Gentle cleanser and mask for blemishes, spots and uneven skin.", ar: "غسول وماسك لطيف للحبوب والبقع وعدم توحد البشرة." },
      tags: { fr: ["2-en-1", "Peau douce"], en: ["2-in-1", "Smooth skin"], ar: ["2 في 1", "بشرة ناعمة"] },
    },
    {
      id: "pack",
      image: "assets/images/packs-niseclat.png",
      filters: ["all", "glow", "hydration", "maternity"],
      price: "529 MAD",
      oldPrice: "699 MAD",
      likes: 211,
      name: { fr: "Pack NISECLAT", en: "NISECLAT Set", ar: "مجموعة NISECLAT" },
      benefit: { fr: "La routine complète pour nettoyer, traiter, hydrater et protéger.", en: "The complete routine to cleanse, treat, hydrate and protect.", ar: "روتين كامل للتنظيف والعلاج والترطيب والحماية." },
      tags: { fr: ["Routine", "Best-seller"], en: ["Routine", "Best-seller"], ar: ["روتين", "الأكثر مبيعا"] },
    },
    {
      id: "gel-nettoyant",
      image: "assets/images/gel-nettoyant.png",
      filters: ["all", "acne", "glow", "maternity"],
      price: "169 MAD",
      oldPrice: "229 MAD",
      likes: 87,
      name: { fr: "Gel Nettoyant Cleansant", en: "Cleansing Gel", ar: "جل التنظيف" },
      benefit: { fr: "Action douce & purifiante à l'extrait de Moringa & Cica. Purifie, apaise et respecte tous types de peaux, même sensibles.", en: "Gentle & purifying action with Moringa & Cica extract. Purifies, soothes and respects all skin types, even sensitive.", ar: "فعل لطيف ومنقي بمستخلص المورينغا والسيكا. ينقي ويهدئ ويناسب جميع أنواع البشرة حتى الحساسة." },
      tags: { fr: ["Moringa & Cica", "Peaux sensibles", "Purifiant"], en: ["Moringa & Cica", "Sensitive skin", "Purifying"], ar: ["مورينغا وسيكا", "بشرة حساسة", "منقي"] },
    },
    {
      id: "ecran-solaire",
      image: "assets/images/ecran-solaire.png",
      filters: ["all", "glow", "hydration", "maternity"],
      price: "120 MAD",
      oldPrice: "199 MAD",
      likes: 73,
      name: { fr: "Écran Solaire SPF 50+", en: "Sunscreen SPF 50+", ar: "واقي شمس SPF 50+" },
      benefit: { fr: "Protection large spectre UVA + UVB haute protection. Sun fluid anti-âge, 50ml — sans résidu blanc, pregnancy safe.", en: "Broad spectrum UVA + UVB high protection. Anti-aging sun fluid, 50ml — no white cast, pregnancy safe.", ar: "حماية عريضة الطيف UVA + UVB. فلويد شمسي مضاد للشيخوخة، 50 مل — بدون أثر أبيض، آمن للحمل." },
      tags: { fr: ["SPF 50+", "Anti-âge", "50 ml"], en: ["SPF 50+", "Anti-aging", "50 ml"], ar: ["SPF 50+", "مضاد للشيخوخة", "50 مل"] },
    },
  ];

  const filters = ["all", "glow", "hydration", "acne", "maternity"];
  const ingredients = [
    { icon: "icon-lemon", key: "vitc", image: "assets/images/vitamine-c.png", product: "Sérum Vit C", title: { fr: "Vitamine C", en: "Vitamin C", ar: "فيتامين C" }, benefits: { fr: ["Réveille l’éclat naturel", "Aide à uniformiser le teint", "Cible et atténue les taches"], en: ["Revives natural glow", "Helps even skin tone", "Targets and fades spots"], ar: ["يعيد الإشراقة الطبيعية", "يساعد على توحيد اللون", "يستهدف ويخفف البقع"] } },
    { icon: "icon-drop", key: "ha", image: "assets/images/serum-hyaluronique.png", product: "Sérum Acide Hyaluronique", title: { fr: "Acide Hyaluronique", en: "Hyaluronic Acid", ar: "حمض الهيالورونيك" }, benefits: { fr: ["Hydratation profonde 72h", "Repulpe et assouplit", "peau lumineuse et rebondie"], en: ["Deep 72h hydration", "Plumps and softens", "Smooth, bouncy skin"], ar: ["ترطيب عميق 72 ساعة", "يمتلئ وينعم البشرة", "وجه ناعم ومرن"] } },
    { icon: "icon-goat", key: "goat", image: "assets/images/savon-chevre.png", product: "Savon Chèvre", title: { fr: "Lait de Chèvre", en: "Goat Milk", ar: "حليب الماعز" }, benefits: { fr: ["Nettoyage ultra-doux", "Combat les imperfections", "Respect total du microbiome"], en: ["Ultra-gentle cleansing", "Fights blemishes", "Full microbiome respect"], ar: ["تنظيف فائق اللطف", "يحارب الشوائب", "احترام تام للميكروبيوم"] } },
    { icon: "icon-leaf", key: "gel", image: "assets/images/gel-nettoyant.png", product: "Gel Nettoyant Cleansant", title: { fr: "Moringa & Cica", en: "Moringa & Cica", ar: "مورينغا وسيكا" }, benefits: { fr: ["Nettoie, éclaire, unifie", "Action purifiante douce", "Tous types de peau"], en: ["Cleanses, lightens, unifies", "Gentle purifying action", "All skin types"], ar: ["ينظف ويضيء ويوحد", "فعل منقي لطيف", "جميع أنواع البشرة"] } },
    { icon: "icon-shield", key: "spf", image: "assets/images/ecran-solaire.png", product: "Écran Solaire SPF 50+", title: { fr: "SPF 50+ Broad Spectrum", en: "SPF 50+ Broad Spectrum", ar: "SPF 50+ طيف واسع" }, benefits: { fr: ["Protection UVA + UVB haute", "Anti-âge & anti-taches", "Pregnancy Safe, sans résidu blanc"], en: ["High UVA + UVB protection", "Anti-aging & anti-spot", "Pregnancy Safe, no white cast"], ar: ["حماية عالية UVA + UVB", "مضاد للشيخوخة والبقع", "آمن للحمل، بدون أثر أبيض"] } },
  ];
  const timeline = [
    { title: { fr: "Constat spa", en: "Spa insight", ar: "ملاحظة السبا" }, text: { fr: "La peau saine change tout.", en: "Healthy skin changes everything.", ar: "البشرة الصحية تغير كل شيء." } },
    { title: { fr: "Tests", en: "Testing", ar: "اختبارات" }, text: { fr: "Deux ans sur elle-même.", en: "Two years on herself.", ar: "سنتان على نفسها." } },
    { title: { fr: "Validation", en: "Validation", ar: "اعتماد" }, text: { fr: "Premières parapharmacies.", en: "First pharmacies.", ar: "أولى الصيدليات." } },
    { title: { fr: "International", en: "International", ar: "دولي" }, text: { fr: "Ouverture Qatar en cours.", en: "Qatar opening underway.", ar: "افتتاح قطر قيد التطوير." } },
  ];
  const ritualSteps = [
    { id: "cleanse", image: "assets/images/gel-nettoyant.png", title: { fr: "Nettoyer", en: "Cleanse", ar: "تنظيف" }, text: { fr: "Purifier en douceur avec le Gel Nettoyant Moussant — nettoie, éclaire et unifie en 3 actions.", en: "Gently purify with the Foaming Cleansing Gel — cleanses, lightens and unifies in 3 actions.", ar: "تنقية لطيفة بجل التنظيف الرغوي — ينظف ويضيء ويوحد بـ 3 أفعال." }, product: products[4] },
    { id: "treat", image: "assets/images/vitamine-c.png", title: { fr: "Traiter", en: "Treat", ar: "علاج" }, text: { fr: "Cibler taches, éclat et texture avec des actifs naturels.", en: "Target spots, glow and texture with natural actives.", ar: "استهداف البقع والإشراقة والملمس بمكونات طبيعية." }, product: products[0] },
    { id: "hydrate", image: "assets/images/serum-hyaluronique.png", title: { fr: "Hydrater", en: "Hydrate", ar: "ترطيب" }, text: { fr: "Repulper la peau et renforcer sa souplesse au quotidien.", en: "Plump skin and reinforce daily suppleness.", ar: "امتلاء البشرة وتعزيز مرونتها يوميا." }, product: products[1] },
    { id: "protect", image: "assets/images/ecran-solaire.png", title: { fr: "Protéger", en: "Protect", ar: "حماية" }, text: { fr: "Protéger avec l’Écran Solaire SPF 50+ — large spectre UVA/UVB, anti-âge, sans résidu blanc.", en: "Protect with Sunscreen SPF 50+ — broad spectrum UVA/UVB, anti-aging, no white cast.", ar: "حماية بواقي الشمس SPF 50+ — طيف واسع UVA/UVB، مضاد للشيخوخة، بدون أثر أبيض." }, product: products[5] },
  ];
  const articles = [
    { id: "preg", likes: 42, comments: 14, tag: { fr: "Grossesse", en: "Maternity", ar: "الحمل" }, title: { fr: "Routine grossesse : moins d’actifs, plus de constance", en: "Pregnancy routine: fewer actives, more consistency", ar: "روتين الحمل: مكونات أقل وثبات أكثر" }, text: { fr: "Nettoyer, hydrater, protéger : trois gestes lisibles valent mieux qu’une routine surchargée.", en: "Cleanse, hydrate, protect: three readable steps beat an overloaded routine.", ar: "تنظيف، ترطيب، حماية: ثلاث خطوات واضحة أفضل من روتين مثقل." } },
    { id: "makeup", likes: 37, comments: 9, tag: { fr: "Makeup artist", en: "Makeup artist", ar: "خبيرة مكياج" }, title: { fr: "Préparer l’éclat avant le fond de teint", en: "Prepare glow before foundation", ar: "تحضير الإشراقة قبل كريم الأساس" }, text: { fr: "Une peau souple reflète mieux la lumière et demande moins de couvrance.", en: "Supple skin reflects light better and needs less coverage.", ar: "البشرة المرنة تعكس الضوء أفضل وتحتاج تغطية أقل." } },
    { id: "acne", likes: 29, comments: 7, tag: { fr: "Peau nette", en: "Clear skin", ar: "بشرة صافية" }, title: { fr: "Acné : purifier sans agresser", en: "Acne: purify without stripping", ar: "حب الشباب: تنقية بدون قسوة" }, text: { fr: "La douceur régulière respecte la peau et aide à retrouver l’équilibre.", en: "Consistent gentleness respects skin and helps restore balance.", ar: "اللطف المنتظم يحترم البشرة ويساعد على استعادة التوازن." } },
  ];

  const state = {
    lang: localStorage.getItem("niseclat_lang") || "fr",
    filter: "all",
    cartItems: JSON.parse(localStorage.getItem("niseclat_cart_items") || "[]"),
    get cart() { return this.cartItems.reduce((s, i) => s + i.qty, 0); },
    likedProducts: new Set(JSON.parse(localStorage.getItem("niseclat_liked_products") || "[]")),
    likedArticles: new Set(JSON.parse(localStorage.getItem("niseclat_liked_articles") || "[]")),
    comments: JSON.parse(localStorage.getItem("niseclat_comments") || "[]"),
    activeStep: 0,
    ritualTimer: null,
    drawerStartX: null,
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const text = (path) => path.split(".").reduce((value, key) => value?.[key], translations[state.lang]) || "";
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04, rootMargin: "0px 0px 120px 0px" });

  // Fallback : révèle immédiatement tous les éléments déjà dans le viewport
  function revealInViewport() {
    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
        el.classList.add("is-visible");
      }
    });
  }

  function observeReveals(scope = document) {
    requestAnimationFrame(() => {
      scope.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((node, index) => {
        node.style.transitionDelay = `${Math.min(index * 80, 400)}ms`;
        revealObserver.observe(node);
      });
      // Révèle immédiatement les éléments déjà visibles
      setTimeout(revealInViewport, 80);
    });
  }

  function animateCounters() {
    const bar = document.querySelector(".proof-bar");
    if (!bar) return;
    const items = bar.querySelectorAll("strong");
    const targets = [98, 0, 100];
    const suffixes = ["%", "%", "%"];
    let done = false;
    const obs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || done) return;
      done = true;
      items.forEach((el, i) => {
        const end = targets[i];
        if (end === 0) {
          el.textContent = "0%";
          return;
        }
        let start = null;
        const duration = 1600;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * end) + suffixes[i];
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      obs.disconnect();
    }, { threshold: 0.5 });
    obs.observe(bar);
  }

  function localize() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;
    $$("[data-i18n]").forEach((node) => { node.textContent = text(node.dataset.i18n); });
    $$("[data-i18n-html]").forEach((node) => { node.innerHTML = text(node.dataset.i18nHtml); });
    $$("[data-i18n-placeholder]").forEach((node) => { node.placeholder = text(node.dataset.i18nPlaceholder); });
    $$("#languageToggle button").forEach((button) => button.classList.toggle("active", button.dataset.lang === state.lang));
    localStorage.setItem("niseclat_lang", state.lang);
    renderAll();
  }

  function renderFilters() {
    $("#filterShell").innerHTML = filters.map((filter) => `<button class="filter-btn ${filter === state.filter ? "active" : ""}" type="button" data-filter="${filter}">${text(`filters.${filter}`)}</button>`).join("");
  }

  function renderProducts() {
    const grid = $("#productGrid");
    grid.style.opacity = "0";
    grid.style.transform = "translateY(12px)";
    setTimeout(() => {
      const visible = products.filter((product) => product.filters.includes(state.filter));
      grid.innerHTML = visible.map((product, index) => {
        const liked = state.likedProducts.has(product.id);
        const tags = product.tags[state.lang].map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
        return `
          <article class="product-card" data-reveal="${index % 2 ? "fade-left" : "fade-up"}" style="transition-delay:${index * 80}ms">
            <div class="product-image">
              <span class="product-img-skeleton" aria-hidden="true"></span>
              <img
                src="${product.image}"
                loading="lazy"
                alt="${escapeHtml(product.name[state.lang])}"
                onload="this.classList.add('is-loaded');this.previousElementSibling.style.opacity='0'"
              />
              <span class="product-safe"><svg><use href="#icon-shield"></use></svg>${text("product.safe")}</span>
              <button class="quick-add" type="button" data-add-cart="${product.id}">${text("product.add")}</button>
            </div>
            <div class="product-content">
              <h3>${product.name[state.lang]}</h3>
              <p>${product.benefit[state.lang]}</p>
              <div class="product-tags">${tags}</div>
              <div class="product-footer">
                <button class="like-btn ${liked ? "is-active" : ""}" type="button" data-like-product="${product.id}" aria-pressed="${liked}">
                  <svg><use href="#icon-heart"></use></svg><span>${product.likes + (liked ? 1 : 0)}</span>
                </button>
                <div class="price"><span class="${product.oldPrice ? "promo" : ""}">${product.price}</span>${product.oldPrice ? `<del>${product.oldPrice}</del>` : ""}</div>
              </div>
            </div>
          </article>`;
      }).join("");
      grid.style.transition = "opacity 360ms var(--ease), transform 360ms var(--ease)";
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
      observeReveals(grid);
    }, 180);
  }

  function renderIngredients() {
    $("#ingredientGrid").innerHTML = ingredients.map((item, index) => `
      <article class="ingredient-card" data-reveal="fade-up" style="transition-delay:${index * 100}ms">
        <div class="ingredient-img-wrap">
          <span class="ingredient-img-skeleton" aria-hidden="true"></span>
          <img
            class="ingredient-img"
            src="${item.image}"
            loading="lazy"
            alt="${escapeHtml(item.title[state.lang])}"
            onload="this.classList.add('is-loaded');this.closest('.ingredient-img-wrap').classList.add('is-loaded')"
          />
          <div class="ingredient-icon-badge" aria-hidden="true">
            <svg><use href="#${item.icon}"></use></svg>
          </div>
        </div>
        <div class="ingredient-body">
          <h3>${item.title[state.lang]}</h3>
          <ul>${item.benefits[state.lang].map((benefit) => `<li>${benefit}</li>`).join("")}</ul>
          <span class="ingredient-link">${text("ingredients.found")} <em>${item.product}</em></span>
        </div>
      </article>`).join("");
    observeReveals($("#ingredientGrid"));
  }

  function renderTimeline() {
    $("#timeline").innerHTML = timeline.map((item, index) => `
      <article class="timeline-step" data-reveal="fade-up">
        <span class="timeline-number">${String(index + 1).padStart(2, "0")}</span>
        <strong>${item.title[state.lang]}</strong>
        <p>${item.text[state.lang]}</p>
      </article>`).join("");
    observeReveals($("#timeline"));
  }

  function renderRitual() {
    $("#ritualStepper").innerHTML = `<div class="ritual-progress"><span style="transform:scaleY(${state.activeStep / (ritualSteps.length - 1)})"></span></div>` + ritualSteps.map((step, index) => `
      <article class="ritual-step ${index === state.activeStep ? "is-active" : ""}">
        <span class="step-number">${index + 1}</span>
        <div>
          <button class="step-button" type="button" data-step="${index}" aria-expanded="${index === state.activeStep}">${step.title[state.lang]}</button>
          <div class="step-panel">
            <p>${step.text[state.lang]}</p>
            <div class="step-product"><img src="${step.image}" loading="lazy" alt="${step.product.name[state.lang]}"><strong>${step.product.name[state.lang]}</strong></div>
          </div>
        </div>
      </article>`).join("");
  }

  function renderArticles() {
    $("#articleList").innerHTML = articles.map((article, index) => {
      const liked = state.likedArticles.has(article.id);
      return `
        <article class="article-card" data-reveal="${index % 2 ? "fade-up" : "fade-left"}">
          <p class="eyebrow">${article.tag[state.lang]}</p>
          <h3>${article.title[state.lang]}</h3>
          <p>${article.text[state.lang]}</p>
          <div class="article-meta">
            <button class="article-action ${liked ? "is-active" : ""}" type="button" data-like-article="${article.id}" aria-pressed="${liked}">
              <svg><use href="#icon-heart"></use></svg><span>${article.likes + (liked ? 1 : 0)}</span>
            </button>
            <span class="article-action"><svg><use href="#icon-comment"></use></svg><span>${article.comments}</span></span>
          </div>
        </article>`;
    }).join("");
    observeReveals($("#articleList"));
  }

  function renderComments() {
    const comments = state.comments.length ? state.comments : [{ name: text("comments.seedName"), message: text("comments.seedMessage"), timestamp: Date.now() - 7200000 }];
    $("#commentCount").textContent = comments.length;
    $("#commentsList").innerHTML = comments.map((comment, i) => `
      <article class="comment" style="animation-delay: ${i * 60}ms">
        <span class="avatar">${escapeHtml(comment.name).slice(0, 1).toUpperCase()}</span>
        <div>
          <div class="comment-head"><strong>${escapeHtml(comment.name)}</strong><span class="comment-time">${text("comments.time")}</span></div>
          <p>${escapeHtml(comment.message)}</p>
        </div>
      </article>`).join("");
  }

  function renderAll() {
    renderFilters();
    renderProducts();
    renderIngredients();
    renderTimeline();
    renderRitual();
    renderArticles();
    renderComments();
    $("#cartCount").textContent = state.cart;
  }

  function persist() {
    localStorage.setItem("niseclat_cart_items", JSON.stringify(state.cartItems));
    localStorage.setItem("niseclat_liked_products", JSON.stringify([...state.likedProducts]));
    localStorage.setItem("niseclat_liked_articles", JSON.stringify([...state.likedArticles]));
    localStorage.setItem("niseclat_comments", JSON.stringify(state.comments));
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
  }

  function createRipple(event) {
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const ripple = document.createElement("span");
    ripple.className = "ripple-wave";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  }

  function initRipples() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest(".btn, .filter-btn, .quick-add, .like-btn, .scroll-top");
      if (target) createRipple({ ...event, currentTarget: target });
    });
  }

  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const existing = state.cartItems.find((item) => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cartItems.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    $("#cartCount").textContent = state.cart;
    $(".cart-button").classList.add("is-bouncing");
    setTimeout(() => $(".cart-button").classList.remove("is-bouncing"), 520);
    persist();
    showToast(text("product.added"));
    openCartPanel();
  }

  function openCartPanel() {
    renderCartPanel();
    $("#cartPanel").classList.add("is-open");
    $("#cartPanel").setAttribute("aria-hidden", "false");
    $("#cartOverlay").hidden = false;
    document.body.classList.add("no-scroll");
  }

  function closeCartPanel() {
    $("#cartPanel").classList.remove("is-open");
    $("#cartPanel").setAttribute("aria-hidden", "true");
    $("#cartOverlay").hidden = true;
    document.body.classList.remove("no-scroll");
  }

  function renderCartPanel() {
    const items = state.cartItems;
    const itemsEl = $("#cartPanelItems");
    if (items.length === 0) {
      itemsEl.innerHTML = `<p class="cart-empty">Votre panier est vide.</p>`;
      $("#cartTotal").textContent = "0 MAD";
      return;
    }
    itemsEl.innerHTML = items.map((item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${escapeHtml(item.name[state.lang] || item.name.fr)}</strong>
          <span>${escapeHtml(item.price)}</span>
        </div>
        <div class="cart-item-qty">
          <button type="button" class="qty-btn" data-qty-dec="${item.id}">−</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-btn" data-qty-inc="${item.id}">+</button>
        </div>
        <button type="button" class="cart-item-remove" data-cart-remove="${item.id}" aria-label="Supprimer">
          <svg><use href="#icon-close"></use></svg>
        </button>
      </div>`).join("");
    const total = items.reduce((sum, item) => sum + parseInt(item.price, 10) * item.qty, 0);
    $("#cartTotal").textContent = total + " MAD";
  }

  function buildWhatsappUrl() {
    const lines = state.cartItems.map(
      (item) => `- ${item.name.fr} x${item.qty} = ${parseInt(item.price, 10) * item.qty} MAD`
    );
    const total = state.cartItems.reduce((s, i) => s + parseInt(i.price, 10) * i.qty, 0);
    const msg = `Bonjour NISECLAT 👋\nJe souhaite commander :\n${lines.join("\n")}\n\nTotal : ${total} MAD`;
    return `https://wa.me/212661382156?text=${encodeURIComponent(msg)}`;
  }

  function openDrawer() {
    $("#mobileOverlay").hidden = false;
    $("#mobileDrawer").classList.add("is-open");
    $("#mobileDrawer").setAttribute("aria-hidden", "false");
    $("#menuButton").setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }
  function closeDrawer() {
    $("#mobileOverlay").hidden = true;
    $("#mobileDrawer").classList.remove("is-open");
    $("#mobileDrawer").setAttribute("aria-hidden", "true");
    $("#menuButton").setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  function showPopup() {
    if (sessionStorage.getItem("niseclat_popup_seen")) return;
    $("#newsletterPopup").hidden = false;
    document.body.classList.add("no-scroll");
    sessionStorage.setItem("niseclat_popup_seen", "true");
  }
  function hidePopup() {
    $("#newsletterPopup").hidden = true;
    document.body.classList.remove("no-scroll");
  }

  function startRitualTimer() {
    clearInterval(state.ritualTimer);
    state.ritualTimer = setInterval(() => {
      state.activeStep = (state.activeStep + 1) % ritualSteps.length;
      renderRitual();
    }, 5000);
  }

  function initScrollSpy() {
    const sections = ["accueil", "boutique", "actifs", "histoire", "cafe"];
    const navLinks = document.querySelectorAll(".main-nav a, .mobile-drawer a");
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", isActive);
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  window.addEventListener("load", () => {
    setTimeout(() => $("#pageLoader").classList.add("is-hidden"), 400);
    setTimeout(() => {
      const line = document.querySelector(".hero-line");
      if (line) line.classList.add("is-drawn");
    }, 1100);
    setTimeout(showPopup, 4000);
  });

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    $("#siteHeader").classList.toggle("is-compact", y > 80);
    $("#scrollTop").classList.toggle("is-visible", y > 400);
    const heroImage = $("#heroImage");
    if (heroImage) heroImage.style.transform = `translateY(${Math.max(-60, y * -0.08)}px)`;
    const storyImg = document.querySelector(".story-media img");
    if (storyImg) {
      const rect = storyImg.closest(".story-media").getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top / window.innerHeight) * 30;
        storyImg.style.transform = `translateY(${offset}px)`;
      }
    }
    const ritualImg = document.querySelector(".ritual-media img");
    if (ritualImg) {
      const rect = ritualImg.closest(".ritual-media").getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top / window.innerHeight) * 25;
        ritualImg.style.transform = `translateY(${offset}px)`;
      }
    }
  }, { passive: true });

  document.addEventListener("mouseleave", (event) => { if (event.clientY <= 0) showPopup(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hidePopup();
      closeDrawer();
    }
  });

  document.addEventListener("click", (event) => {
    const lang = event.target.closest("[data-lang]");
    if (lang) {
      state.lang = lang.dataset.lang;
      localize();
      return;
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      state.filter = filter.dataset.filter;
      renderFilters();
      renderProducts();
      return;
    }
    const add = event.target.closest("[data-add-cart]");
    if (add) {
      addToCart(add.dataset.addCart);
      return;
    }
    const qtyInc = event.target.closest("[data-qty-inc]");
    if (qtyInc) {
      const item = state.cartItems.find((i) => i.id === qtyInc.dataset.qtyInc);
      if (item) item.qty += 1;
      persist();
      renderCartPanel();
      $("#cartCount").textContent = state.cart;
      return;
    }
    const qtyDec = event.target.closest("[data-qty-dec]");
    if (qtyDec) {
      const item = state.cartItems.find((i) => i.id === qtyDec.dataset.qtyDec);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) state.cartItems = state.cartItems.filter((i) => i.id !== qtyDec.dataset.qtyDec);
      }
      persist();
      renderCartPanel();
      $("#cartCount").textContent = state.cart;
      return;
    }
    const cartRemove = event.target.closest("[data-cart-remove]");
    if (cartRemove) {
      state.cartItems = state.cartItems.filter((i) => i.id !== cartRemove.dataset.cartRemove);
      persist();
      renderCartPanel();
      $("#cartCount").textContent = state.cart;
      return;
    }
    const productLike = event.target.closest("[data-like-product]");
    if (productLike) {
      const id = productLike.dataset.likeProduct;
      state.likedProducts.has(id) ? state.likedProducts.delete(id) : state.likedProducts.add(id);
      persist();
      renderProducts();
      return;
    }
    const articleLike = event.target.closest("[data-like-article]");
    if (articleLike) {
      const id = articleLike.dataset.likeArticle;
      state.likedArticles.has(id) ? state.likedArticles.delete(id) : state.likedArticles.add(id);
      persist();
      renderArticles();
      return;
    }
    const step = event.target.closest("[data-step]");
    if (step) {
      state.activeStep = Number(step.dataset.step);
      renderRitual();
      startRitualTimer();
    }
  });

  $("#cartToggle").addEventListener("click", openCartPanel);
  $("#cartPanelClose").addEventListener("click", closeCartPanel);
  $("#cartOverlay").addEventListener("click", closeCartPanel);
  $("#cartWhatsappBtn").addEventListener("click", () => {
    if (state.cartItems.length === 0) { showToast("Votre panier est vide."); return; }
    window.open(buildWhatsappUrl(), "_blank");
  });
  $("#cartClearBtn").addEventListener("click", () => {
    state.cartItems = [];
    persist();
    renderCartPanel();
    $("#cartCount").textContent = 0;
  });

  $("#menuButton").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#mobileOverlay").addEventListener("click", closeDrawer);
  $("#mobileDrawer").addEventListener("click", (event) => { if (event.target.closest("a")) closeDrawer(); });
  $("#mobileDrawer").addEventListener("touchstart", (event) => { state.drawerStartX = event.touches[0].clientX; }, { passive: true });
  $("#mobileDrawer").addEventListener("touchend", (event) => {
    if (state.drawerStartX === null) return;
    const delta = event.changedTouches[0].clientX - state.drawerStartX;
    if ((document.documentElement.dir === "rtl" && delta < -60) || (document.documentElement.dir !== "rtl" && delta > 60)) closeDrawer();
    state.drawerStartX = null;
  }, { passive: true });

  $("#ritualStepper").addEventListener("mouseenter", () => clearInterval(state.ritualTimer));
  $("#ritualStepper").addEventListener("mouseleave", startRitualTimer);
  $("#commentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#commentName").value.trim();
    const message = $("#commentMessage").value.trim();
    if (!name || !message) return;
    state.comments.unshift({ name, message, timestamp: Date.now() });
    persist();
    event.target.reset();
    renderComments();
  });
  $$(".footer-newsletter").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("✓");
  }));
  $("#closePopup").addEventListener("click", hidePopup);
  $("#newsletterPopup").addEventListener("click", (event) => { if (event.target.id === "newsletterPopup") hidePopup(); });
  $("#popupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    hidePopup();
    showToast("✓");
  });
  $("#scrollTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ══════════════════════════════════════════════════════════
  //  VISUAL ENHANCEMENT LAYER — 21st.dev inspired patterns
  //  Pure visual functions — zero impact on data/logic/state
  // ══════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────
  //  GIF-LIKE & TEXT ANIMATION LAYER — 21st.dev patterns
  // ─────────────────────────────────────────────────────────

  function initSparklesGif() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const STAR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path fill="currentColor" d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93-210.06 184.09-378.37 392.05-407.74-207.98-29.38-371.16-197.69-392.06-407.78z"/></svg>`;
    const COLS = ["#c9a84c","#f0d98e","#e8d5a8","#a07840","#fffbe8","#617543"];

    function spawnStar(field) {
      const el = document.createElement("div");
      el.className = "sparkle-gif";
      const sz  = 7 + Math.random() * 14;
      const dur = (1.1 + Math.random() * 1.3).toFixed(2);
      el.style.cssText = `left:${3+Math.random()*94}%;top:${3+Math.random()*94}%;`
        + `width:${sz}px;height:${sz}px;`
        + `color:${COLS[Math.floor(Math.random()*COLS.length)]};`
        + `--sparkle-dur:${dur}s;`;
      el.innerHTML = STAR;
      field.appendChild(el);
      el.addEventListener("animationend", () => {
        el.remove();
        setTimeout(() => spawnStar(field), 80 + Math.random() * 500);
      }, { once: true });
    }

    function createField(parent, count) {
      const field = document.createElement("div");
      field.className = "sparkle-field";
      field.setAttribute("aria-hidden", "true");
      parent.appendChild(field);
      for (let i = 0; i < count; i++) {
        setTimeout(() => spawnStar(field), i * 200 + Math.random() * 400);
      }
    }

    const hero = document.querySelector(".hero-section");
    if (hero) createField(hero, 9);

    const actifs = document.getElementById("actifs");
    if (actifs) createField(actifs, 6);
  }

  function initWordReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const h1 = document.querySelector(".hero-section h1");
    if (!h1) return;

    function apply() {
      if (h1.querySelector(".word-reveal")) return;
      const raw = h1.innerHTML;
      // Only wrap plain text BEFORE <em> — preserve <em> intact (gradient needs direct text nodes)
      const processed = raw.replace(/^([^<]+)/, (_, text) =>
        text.trim().split(/\s+/).filter(Boolean).map(w =>
          `<span class="word-reveal"><span>${w}</span></span>`
        ).join(" ") + " "
      );
      h1.innerHTML = processed;
      // Stagger plain words, then delay the em block
      h1.querySelectorAll(".word-reveal > span").forEach((span, i) => {
        span.style.animationDelay = `${200 + i * 100}ms`;
      });
      // Animate the em block itself after plain words finish
      const em = h1.querySelector("em");
      if (em) {
        const wordCount = h1.querySelectorAll(".word-reveal").length;
        em.style.opacity = "0";
        em.style.transform = "translateY(16px)";
        em.style.filter = "blur(6px)";
        em.style.transition = "opacity 0.78s cubic-bezier(0.16,1,0.3,1), transform 0.78s cubic-bezier(0.16,1,0.3,1), filter 0.78s cubic-bezier(0.16,1,0.3,1)";
        setTimeout(() => {
          em.style.opacity = "1";
          em.style.transform = "translateY(0)";
          em.style.filter = "blur(0)";
        }, 200 + wordCount * 100 + 80);
      }
    }

    setTimeout(apply, 150);
    new MutationObserver(() => {
      if (!h1.querySelector(".word-reveal")) setTimeout(apply, 40);
    }).observe(h1, { childList: true });
  }

  function initEyebrowAnimations() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-animated");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".eyebrow").forEach(el => obs.observe(el));
  }

  // ─────────────────────────────────────────────────────────

  function initHeroParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = document.querySelector(".hero-section");
    if (!hero) return;
    const canvas = document.createElement("canvas");
    canvas.className = "hero-particle-canvas";
    canvas.setAttribute("aria-hidden", "true");
    hero.prepend(canvas);
    const ctx = canvas.getContext("2d");
    const PALETTE = [[201,168,76],[97,117,67],[240,217,142],[160,120,64]];
    const pts = [];
    let W = 0, H = 0, mx = -9999, my = -9999, t = 0;
    function resize() {
      const r = hero.getBoundingClientRect();
      canvas.width = W = r.width;
      canvas.height = H = r.height;
    }
    function mkPt() {
      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      return { x: Math.random() * W, y: Math.random() * H,
               vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
               r: Math.random() * 2.2 + 0.5, alpha: Math.random() * 0.32 + 0.07,
               phase: Math.random() * Math.PI * 2, col: c };
    }
    resize();
    for (let i = 0; i < 72; i++) pts.push(mkPt());
    hero.addEventListener("mousemove", e => {
      const r = hero.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    }, { passive: true });
    hero.addEventListener("mouseleave", () => { mx = -9999; my = -9999; }, { passive: true });
    function tick() {
      ctx.clearRect(0, 0, W, H);
      t += 0.007;
      for (const p of pts) {
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) { const f = (120 - d) / 120; p.vx += (dx / d) * f * 0.36; p.vy += (dy / d) * f * 0.36; }
        p.vx *= 0.968; p.vy *= 0.968;
        p.x += p.vx; p.y += p.vy;
        if (p.x < -4) p.x = W + 4; if (p.x > W + 4) p.x = -4;
        if (p.y < -4) p.y = H + 4; if (p.y > H + 4) p.y = -4;
        const tw = Math.sin(t + p.phase) * 0.5 + 0.5;
        const a = p.alpha * (0.35 + 0.65 * tw);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${a})`;
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    tick();
    window.addEventListener("resize", resize, { passive: true });
  }

  function initCardTilt() {
    if (window.matchMedia("(hover: none)").matches) return;
    const SEL = ".product-card, .ingredient-card, .article-card";
    const MAX = 6;
    document.addEventListener("mousemove", e => {
      const card = e.target.closest(SEL);
      if (!card) return;
      const r = card.getBoundingClientRect();
      const tx = ((e.clientX - r.left) / r.width  - 0.5) * MAX * 2;
      const ty = ((e.clientY - r.top)  / r.height - 0.5) * MAX * 2;
      const lift = card.classList.contains("ingredient-card") ? 10
                 : card.classList.contains("article-card")    ? 6 : 8;
      card.style.transform = `perspective(900px) rotateX(${-ty}deg) rotateY(${tx}deg) translateY(-${lift}px)`;
      card.style.transition = "transform 55ms linear";
    });
    document.addEventListener("mouseout", e => {
      const card = e.target.closest(SEL);
      if (!card || card.contains(e.relatedTarget)) return;
      card.style.transition = "transform 440ms cubic-bezier(0.16,1,0.3,1)";
      card.style.transform  = "";
      setTimeout(() => { card.style.transform = ""; card.style.transition = ""; }, 460);
    });
  }

  function initLikeParticles() {
    const COLS = ["#c9a84c","#f0d98e","#617543","#a07840","#e8d5a8","#fffbe8"];
    document.addEventListener("click", e => {
      const btn = e.target.closest(".like-btn, [data-like-article]");
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      for (let i = 0; i < 12; i++) {
        const el = document.createElement("div");
        el.className = "like-particle";
        const ang = (i / 12) * Math.PI * 2;
        const dist = 24 + Math.random() * 26;
        const sz   = 4 + Math.random() * 5;
        const col  = COLS[Math.floor(Math.random() * COLS.length)];
        const dur  = 580 + Math.random() * 180;
        el.style.cssText = `left:${cx}px;top:${cy}px;width:${sz}px;height:${sz}px;`
          + `--tx:${Math.cos(ang)*dist}px;--ty:${Math.sin(ang)*dist}px;`
          + `--color:${col};animation-duration:${dur}ms;`;
        document.body.appendChild(el);
        el.addEventListener("animationend", () => el.remove(), { once: true });
      }
    });
  }

  function initFilterMorphing() {
    // Capture phase — fires before existing delegated handler, purely visual CSS class
    document.addEventListener("click", e => {
      if (!e.target.closest("[data-filter]")) return;
      const grid = document.getElementById("productGrid");
      if (!grid) return;
      grid.classList.add("is-filtering");
      setTimeout(() => grid.classList.remove("is-filtering"), 160);
    }, true);
  }

  function initPopupAnimation() {
    const popup = document.getElementById("newsletterPopup");
    if (!popup) return;
    const card = popup.querySelector(".popup-card");
    if (!card) return;
    new MutationObserver(() => {
      if (!popup.hidden) {
        card.classList.remove("popup-entered");
        void card.offsetWidth; // force reflow to restart animation
        card.classList.add("popup-entered");
      }
    }).observe(popup, { attributes: true, attributeFilter: ["hidden"] });
  }

  function initNavIndicator() {
    const nav = document.querySelector(".main-nav");
    if (!nav) return;
    const ind = document.createElement("span");
    ind.className = "nav-indicator";
    nav.appendChild(ind);
    const links = nav.querySelectorAll("a");
    links.forEach(a => {
      a.addEventListener("mouseenter", () => {
        const lr = a.getBoundingClientRect();
        const nr = nav.getBoundingClientRect();
        ind.style.left    = (lr.left - nr.left) + "px";
        ind.style.width   = lr.width + "px";
        ind.style.opacity = "1";
      });
    });
    nav.addEventListener("mouseleave", () => { ind.style.opacity = "0"; });
  }

  // ──────────────────────────────────────────────────────────

  // Révèle les éléments lors du scroll et de la navigation par ancres
  window.addEventListener("scroll", revealInViewport, { passive: true });
  window.addEventListener("hashchange", () => setTimeout(revealInViewport, 200));
  // Révèle immédiatement au chargement
  setTimeout(revealInViewport, 300);

  localize();
  observeReveals();
  initScrollSpy();
  initRipples();
  initSparklesGif();
  initWordReveal();
  initEyebrowAnimations();
  initHeroParticles();
  initCardTilt();
  initLikeParticles();
  initFilterMorphing();
  initPopupAnimation();
  initNavIndicator();
  startRitualTimer();
  animateCounters();
});
