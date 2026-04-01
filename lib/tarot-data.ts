export interface TarotCard {
  id: number;
  name: string;
  arcana: "Major" | "Minor";
  meaningUpright: string;
  meaningReversed: string;
  image: string;
}

export interface DrawnCard extends TarotCard {
  isReversed: boolean;
}

export const tarotCards: TarotCard[] = [
  // === BÜYÜK ARKANA (MAJOR ARCANA) - 22 KART ===
  {
    id: 0,
    name: "The Fool (Deli / Mecnun)",
    arcana: "Major",
    meaningUpright:
      "Hayatınızda yepyeni ve taptaze bir sayfa açılmak üzere. İçinizdeki çocuğu serbest bırakmalı ve bilinmeyene karşı cesur bir adım atmalısınız. Evren sizi destekliyor, bu yüzden endişeleri bir kenara bırakıp maceraya atılmanın tam zamanı. Masumiyetiniz ve sınırsız potansiyeliniz en büyük rehberiniz olacak.",
    meaningReversed:
      "Özgürlük arayışınız sizi düşüncesizce riskler almaya itiyor olabilir. Hazırlıksız yakalanmamak için adımlarınızı daha dikkatli atmalı ve çevrenizdeki uyarıları dikkate almalısınız. Aptalca cesaret ile gerçek kararlılık arasındaki ince çizgiyi fark etmeniz gerekiyor. Şu an büyük kararlar almak yerine durup durumu tekrar değerlendirmek daha sağlıklı olacaktır.",
    image: "/tarotCards/m00.jpg",
  },
  {
    id: 1,
    name: "The Magician (Büyücü)",
    arcana: "Major",
    meaningUpright:
      "İstediğiniz her şeyi gerçeğe dönüştürecek tüm araçlara ve yeteneklere sahipsiniz. Zihinsel odaklanmanız ve irade gücünüz sayesinde imkansız görünenleri başarabilirsiniz. Gökyüzü ve yeryüzü arasındaki köprü sizsiniz; enerjinizi doğru kanala akıtın. Evrenin yaratıcı gücü şu an parmaklarınızın ucunda bekliyor.",
    meaningReversed:
      "Elinizdeki muazzam potansiyeli yanlış yönlendiriyor veya bencilce amaçlar için kullanıyor olabilirsiniz. Yeteneklerinizin farkındasınız ancak bunları disipline sokmakta zorluk çekiyorsunuz. Manipülatif tavırlardan kaçınmalı ve dürüstlüğünüzü korumalısınız. Kendi gücünüze inanmadığınız için fırsatların elinizden kayıp gitmesine izin vermeyin.",
    image: "/tarotCards/m01.jpg",
  },
  {
    id: 2,
    name: "The High Priestess (Azize)",
    arcana: "Major",
    meaningUpright:
      "Şu an mantığınızdan ziyade sezgilerinizin sesini dinleme zamanıdır. Bilinçaltınızın derinliklerinden gelen mesajlara kulak verin, rüyalarınız size önemli ipuçları verebilir. Her şeyin göründüğü gibi olmadığını ve bazı sırların zamanla çözüleceğini unutmayın. İçsel bilgeliğinize güvenerek sessizce gözlem yapmaya devam edin.",
    meaningReversed:
      "Dış dünyanın gürültüsü nedeniyle iç sesinizi duymakta zorlanıyor olabilirsiniz. Sezgilerinizi görmezden gelmek sizi yüzeysel kararlar almaya ve yanlış yollara sapmaya itebilir. Gizlenen sırlar gün yüzüne çıktığında şaşırmamak için daha derinlemesine düşünmelisiniz. Kendinizden kaçmak yerine yalnız kalıp ruhunuzun ne fısıldadığını anlamaya çalışın.",
    image: "/tarotCards/m02.jpg",
  },
  {
    id: 3,
    name: "The Empress (İmparatoriçe)",
    arcana: "Major",
    meaningUpright:
      "Hayatınızın her alanında bereket ve bolluğun arttığı verimli bir döneme giriyorsunuz. Doğayla bağ kurmak, yaratıcı projeler üretmek ve sevdiklerinize şefkat göstermek için harika bir zaman. Fiziksel ve ruhsal olarak beslendiğinizi hissedeceğiniz bu süreçte üretim gücünüz doruktadır. Dişil enerjinin yumuşak ama etkili gücü sizi sarıp sarmalıyor.",
    meaningReversed:
      "Yaratıcılığınızın önünde bazı engeller olduğunu hissediyor veya kendinizi ifade etmekte zorlanıyor olabilirsiniz. Başkalarına fazla odaklanırken kendi ihtiyaçlarınızı ihmal etmiş ve bereketsiz bir ruh haline bürünmüş olabilirsiniz. Maddi veya manevi anlamda aşırı bağımlılıklar özgürlüğünüzü kısıtlıyor olabilir. Kendi içsel kaynağınızla yeniden bağ kurmalı ve topraklanmalısınız.",
    image: "/tarotCards/m03.jpg",
  },
  {
    id: 4,
    name: "The Emperor (İmparator)",
    arcana: "Major",
    meaningUpright:
      "Hayatınızı düzene sokmak için otorite kurmalı ve stratejik planlar yapmalısınız. Liderlik vasıflarınızın öne çıktığı bu dönemde mantıklı kararlar alarak sağlam temeller oluşturabilirsiniz. Disiplin ve koruyucu bir enerjiyle çevrenize güven verecek pozisyondasınız. Başarıya ulaşmak için kurallara uymalı ve sorumluluk almaktan çekinmemelisiniz.",
    meaningReversed:
      "Gücünüzü başkalarını ezmek veya kontrol etmek için kullanıyor olabilirsiniz, bu da çevrenizde tiranlık olarak algılanıyor. Esneklik eksikliği ve katı kurallar yaratıcılığınızı ve ilişkilerinizi baltalıyor olabilir. Otorite figürleriyle çatışmalar yaşayabilir veya kendi hayatınızın kontrolünü kaybetmiş hissedebilirsiniz. Disiplini zorbalığa dönüştürmeden, daha şefkatli bir liderlik anlayışı benimsemelisiniz.",
    image: "/tarotCards/m04.jpg",
  },
  {
    id: 5,
    name: "The Hierophant (Aziz)",
    arcana: "Major",
    meaningUpright:
      "Geleneksel değerlere saygı duymalı ve ruhani bir rehberlik arayışına girmelisiniz. Kurumsallaşmış yapılar, eğitim veya toplumsal kurallar çerçevesinde hareket etmek size fayda sağlayacaktır. Bilgi paylaşımı ve mentorluk almak için oldukça uygun bir enerji hakimdir. İnançlarınızın ve ahlaki değerlerinizin hayatınıza yön verdiği bir süreçtesiniz.",
    meaningReversed:
      "Artık size hizmet etmeyen eski kurallara ve katı geleneklere baş kaldırma zamanı geldi. Toplumun dayattığı kalıpların dışına çıkarak kendi özgün inanç sisteminizi oluşturmalısınız. Tabuları yıkmak ve yenilikçi yaklaşımlar benimsemek sizi özgürleştirecektir. Başkalarının onayını aramayı bırakmalı ve kendi ruhani yolunuzu kendiniz çizmelisiniz.",
    image: "/tarotCards/m05.jpg",
  },
  {
    id: 6,
    name: "The Lovers (Aşıklar)",
    arcana: "Major",
    meaningUpright:
      "İlişkilerinizde uyumun, tutkunun ve derin bir bağın hakim olduğu bir dönemdesiniz. Sadece romantik değil, hayatınızın genelinde önemli seçimler ve yol ayrımları karşınıza çıkabilir. Kalbinizin ve mantığınızın birleştiği kararlar sizi en doğru sonuca ulaştıracaktır. Kendi değerlerinizle barışık olmak, başkalarıyla kurduğunuz bağları güçlendirir.",
    meaningReversed:
      "İç dünyanızda veya ilişkilerinizde bir uyumsuzluk ve kafa karışıklığı yaşıyor olabilirsiniz. Değerlerinizin sarsıldığı veya yanlış partnerler/seçimler nedeniyle hayal kırıklığına uğradığınız bir süreçtir. Kararsızlık sizi yıpratabilir ve kendinizi ifade etmekte zorlanabilirsiniz. Önce kendi içinizdeki çatışmayı çözmeli ve samimiyetinizi sorgulamalısınız.",
    image: "/tarotCards/m06.jpg",
  },
  {
    id: 7,
    name: "The Chariot (Araba)",
    arcana: "Major",
    meaningUpright:
      "Azminiz ve sarsılmaz iradeniz sayesinde önünüzdeki tüm engelleri aşarak zafere ulaşacaksınız. Zıt duyguları ve durumları kontrol altına alarak hedefinizden sapmadan ilerlemeniz gerekiyor. Odaklanmış bir zihin ve disiplinle imkansızı başarmanız an meselesidir. Kendi kaderinizin dizginlerini elinize aldınız, hız kesmeden devam edin.",
    meaningReversed:
      "Kontrolü kaybettiğinizi ve olayların sizi sürüklediğini hissediyor olabilirsiniz. Saldırgan tavırlar veya aşırı hırs, çevrenizdeki insanlarla çatışmanıza ve yönünüzü şaşırmanıza neden olabilir. Enerjinizi boşa harcıyor ve aynı hataları tekrar ediyor olabilirsiniz. Durup dizginleri sıkıca tutmalı ve hedeflerinizi daha gerçekçi bir şekilde belirlemelisiniz.",
    image: "/tarotCards/m07.jpg",
  },
  {
    id: 8,
    name: "Strength (Güç)",
    arcana: "Major",
    meaningUpright:
      "Gerçek güç kaba kuvvet değil, içsel sabır, şefkat ve sarsılmaz bir cesarettir. İçinizdeki 'aslanı' yani ilkel dürtülerinizi sevgiyle terbiye etmeyi öğrenmelisiniz. Zorluklara karşı dayanıklılığınız ve yumuşak gücünüz sayesinde her türlü krizin üstesinden gelebilirsiniz. Kendinize olan güveniniz sessiz ama derinden bir etki yaratıyor.",
    meaningReversed:
      "Kendinize olan inancınızın sarsıldığı ve zayıf düştüğünüz bir dönemden geçiyor olabilirsiniz. İçsel korkularınızın sizi yönetmesine izin veriyor ve çiğ öfkenize yenik düşüyorsunuz. Sabrınızın tükenmesi nedeniyle yanlış tepkiler verebilir ve kontrolü kaybedebilirsiniz. Kendi değerinizi yeniden hatırlamalı ve ruhsal dengenizi bulmak için şefkatli olmalısınız.",
    image: "/tarotCards/m08.jpg",
  },
  {
    id: 9,
    name: "The Hermit (Ermiş)",
    arcana: "Major",
    meaningUpright:
      "Dış dünyanın gürültüsünden uzaklaşarak kendi içsel ışığınızı bulma vaktiniz geldi. Yalnızlık bir eksiklik değil, aksine bilgelik kazanacağınız kutsal bir alan olacaktır. Hayatınızdaki olayları derinlemesine analiz etmeli ve gerçek cevapların sadece kendi ruhunuzda olduğunu görmelisiniz. Bilgi arayışınız sizi ruhsal bir olgunluğa taşıyacaktır.",
    meaningReversed:
      "Yalnızlığı bir kaçış yolu olarak kullanıyor ve toplumdan sağlıksız bir şekilde kopuyor olabilirsiniz. Gerçeklerden kaçmak için kendinizi izole etmeniz sadece kafa karışıklığınızı ve asosyalliğinizi artırır. İçsel arayışınız takıntıya dönüşmüş olabilir, bu da sizi melankoliye sürükleyebilir. Artık mağaranızdan çıkmalı ve öğrendiğiniz bilgileri hayata geçirmeye başlamalısınız.",
    image: "/tarotCards/m09.jpg",
  },
  {
    id: 10,
    name: "Wheel of Fortune (Kader Çarkı)",
    arcana: "Major",
    meaningUpright:
      "Kaderin çarkı sizin lehinize dönmeye başladı, büyük ve olumlu değişikliklere hazır olun. Şans kapınızı çalıyor ancak bu döngünün bir parçası olduğunuzu unutmadan akışta kalmalısınız. Hayatınızda beklediğiniz o büyük fırsat veya dönüm noktası aniden gerçekleşebilir. Evrenin ritmine güvenin, her şey olması gerektiği gibi ilerliyor.",
    meaningReversed:
      "Şanssız bir dönemden geçtiğinizi ve olayların kontrolünüz dışında geliştiğini hissedebilirsiniz. Değişime direnç göstermek sadece işleri zorlaştırır, bu yüzden olanı kabullenmek en iyisidir. Geçici bir durgunluk veya planların altüst olması sizi hayal kırıklığına uğratmasın. Çarkın tekrar yükseleceğini bilerek sabırlı kalmalı ve hatalardan ders çıkarmalısınız.",
    image: "/tarotCards/m10.jpg",
  },
  {
    id: 11,
    name: "Justice (Adalet)",
    arcana: "Major",
    meaningUpright:
      "Ektiğinizi biçtiğiniz bir dönemdesiniz; tüm kararlarınızın sebep-sonuç ilişkisini net bir şekilde göreceksiniz. Dürüstlük ve hak hakkaniyet hayatınızda ön plana çıkacak, beklediğiniz hukuki veya etik meseleler sonuçlanacaktır. Gerçeği tüm çıplaklığıyla kabul etmeli ve tarafsız bir bakış açısı geliştirmelisiniz. Adalet eninde sonunda yerini bulacak ve denge sağlanacaktır.",
    meaningReversed:
      "Hayatınızda bir haksızlığa uğradığınızı veya etik dışı durumlarla karşılaştığınızı hissedebilirsiniz. Kendi hatalarınızın sorumluluğunu almaktan kaçıyor veya dürüst davranmıyor olabilirsiniz. Önyargılarınız sağlıklı karar vermenizi engelliyor ve olayları çarpıtmanıza neden oluyor. Hesap vermekten kaçmak yerine dürüstçe yüzleşmeyi ve hataları düzeltmeyi seçmelisiniz.",
    image: "/tarotCards/m11.jpg",
  },
  {
    id: 12,
    name: "The Hanged Man (Asılan Adam)",
    arcana: "Major",
    meaningUpright:
      "Hayatın durma noktasına gelmesi aslında sizin için büyük bir fırsat ve yeni bir bakış açısıdır. Olayları farklı bir açıdan görmek için fedakarlık yapmalı ve akışa teslim olmalısınız. Sabırla beklemek, zorla bir şeyleri oldurmaya çalışmaktan çok daha verimli sonuçlar doğuracaktır. Ruhsal uyanışınız için bu duraklama dönemini verimli kullanın.",
    meaningReversed:
      "Anlamsız bir direniş gösteriyor ve boşuna kendinizi feda ediyorsunuz. Kararsızlık içinde boğulurken zaman kaybediyor ve aynı yerde sayıyorsunuz. Değişimden korktuğunuz için olayları sürüncemede bırakıyor ve gerçeklerden kaçıyorsunuz. Artık bu askıda kalma halinden çıkmalı ve silkinerek harekete geçmek için bir karar vermelisiniz.",
    image: "/tarotCards/m12.jpg",
  },
  {
    id: 13,
    name: "Death (Ölüm)",
    arcana: "Major",
    meaningUpright:
      "Hayatınızda artık işlevini yitirmiş olan ne varsa sona eriyor ve büyük bir dönüşüm başlıyor. Bu fiziksel bir ölüm değil, aksine ruhsal bir temizlik ve yeni bir doğumun habercisidir. Eski alışkanlıkları, eşyaları veya insanları bırakmak sizi çok daha aydınlık bir geleceğe hazırlayacaktır. Değişimin sancılı olması, yerine gelecek olanın değerini artırır.",
    meaningReversed:
      "Biten bir şeye umutsuzca tutunuyor ve değişime direnç göstererek kendinizi acı içinde bırakıyorsunuz. Durgunluk ve geçmişe takılı kalma hali yeni fırsatların kapınıza gelmesini engelliyor. Korkularınız nedeniyle vedalaşmanız gereken durumları uzatıyor ve ruhsal olarak yoruluyorsunuz. Bırakmanın özgürleştirici gücünü kabullenmeli ve akışa teslim olmalısınız.",
    image: "/tarotCards/m13.jpg",
  },
  {
    id: 14,
    name: "Temperance (Denge)",
    arcana: "Major",
    meaningUpright:
      "Zıt kutupları bir araya getirme ve hayatınızda mükemmel bir denge kurma sürecindesiniz. Sabır, ılımlılık ve sağduyu ile hareket ederek ruhsal huzuru yakalayabilirsiniz. Aceleci davranmak yerine olayları zamana yaymak en doğru sonuçları getirecektir. İçsel dünyanızdaki barış, dış dünyanıza da büyük bir uyum olarak yansıyacaktır.",
    meaningReversed:
      "Hayatınızın çeşitli alanlarında aşırılığa kaçıyor ve dengenizi kaybetmiş hissediyor olabilirsiniz. Uyumsuzluk ve huzursuzluk sizi kararsızlığa itiyor ve enerjinizi verimsiz kullanmanıza neden oluyor. Sabırsız tavırlar işlerin daha da karışmasına ve ilişkilerde gerginliğe yol açabilir. Ruhunuzu ve bedeninizi dinlendirmeli, merkezinize dönmek için çaba sarf etmelisiniz.",
    image: "/tarotCards/m14.jpg",
  },
  {
    id: 15,
    name: "The Devil (Şeytan)",
    arcana: "Major",
    meaningUpright:
      "Sizi kısıtlayan bağımlılıklarınızla, korkularınızla ve gölge benliğinizle yüzleşme vaktiniz geldi. Maddi dünyaya, kötü alışkanlıklara veya toksik ilişkilere fazla tutunmuş olabilirsiniz. Aslında zincirleriniz göründüğünden çok daha gevşek; tek ihtiyacınız olan farkındalıktır. Kendi iradenizle bu kısıtlamalardan kurtulabileceğinizi asla unutmayın.",
    meaningReversed:
      "Bağımlılıklarınızın ve korkularınızın farkına vardınız, artık özgürleşme süreci başlıyor. Sizi aşağı çeken bağlardan kopmak için gerekli olan içsel gücü ve motivasyonu kendinizde bulacaksınız. Bağımsızlığınızı ilan etmek ve kendi sınırlarınızı çizmek sizi ruhsal olarak güçlendirecektir. Karanlıktan aydınlığa doğru büyük bir farkındalık adımı atıyorsunuz.",
    image: "/tarotCards/m15.jpg",
  },
  {
    id: 16,
    name: "The Tower (Yıkılan Kule)",
    arcana: "Major",
    meaningUpright:
      "Hayatınızda sarsılmaz sandığınız temeller aniden yıkılabilir ancak bu kaos aslında büyük bir uyanıştır. Yanlış inançlar ve sahte yapılar yerle bir olurken, altından gerçek özünüz çıkacaktır. Bu ani değişim canınızı yaksa da sizi özgürleştirecek ve daha sağlam temeller kurmanızı sağlayacaktır. Yıkım olmadan yeni bir inşa süreci başlayamaz.",
    meaningReversed:
      "Gözle görülür bir felaketin kıyısından dönmüş olabilir veya kaçınılmaz olanı ertelemeye çalışıyor olabilirsiniz. Değişimden o kadar korkuyorsunuz ki, çürümüş olan yapıları bile ayakta tutmaya çabalıyorsunuz. Bu erteleme hali sadece acınızı uzatır ve gerçek uyanışınızı geciktirir. Korkularınızla yüzleşmeli ve yıkılması gerekenin gitmesine izin vermelisiniz.",
    image: "/tarotCards/m16.jpg",
  },
  {
    id: 17,
    name: "The Star (Yıldız)",
    arcana: "Major",
    meaningUpright:
      "Zorlu bir fırtınanın ardından ruhunuzu iyileştirecek olan umut ve inanç ışığı belirmeye başladı. Kendinizi evrenle uyumlu hissedeceğiniz, şifalandığınız ve ilham dolduğunuz bir süreçtesiniz. Geleceğe dair hayalleriniz yeşerirken, evrenin sizi desteklediğini derinden hissedeceksiniz. Kendi içsel parlaklığınızı keşfedin ve yaymaya başlayın.",
    meaningReversed:
      "Umutlarınızın söndüğünü ve geleceğe dair inancınızı kaybettiğinizi hissediyor olabilirsiniz. Kendinize olan güvensizliğiniz yaratıcılığınızı baltalıyor ve sizi karamsarlığa sürüklüyor. Hayal kırıklıkları nedeniyle etrafınızdaki güzellikleri görmekte zorlanıyor olabilirsiniz. Işığın hala orada olduğunu hatırlayın; sadece bulutların dağılması için kendinize zaman verin.",
    image: "/tarotCards/m17.jpg",
  },
  {
    id: 18,
    name: "The Moon (Ay)",
    arcana: "Major",
    meaningUpright:
      "Zihninizde yanılsamaların, belirsizliklerin ve korkuların hakim olduğu bir 'gece' dönemindesiniz. Her şey göründüğü gibi olmayabilir, bu yüzden sezgilerinize güvenerek karanlıkta yolunuzu bulmaya çalışmalısınız. Bilinçaltınızdaki sırlar rüyalar yoluyla size rehberlik etmek istiyor olabilir. Kaygılarınızın sizi yönetmesine izin vermeden, sislerin dağılmasını bekleyin.",
    meaningReversed:
      "Kafa karışıklığınız yavaş yavaş dağılıyor ve gerçekleri daha net görmeye başlıyorsunuz. Korkularınızla yüzleşerek yanılsamalardan kurtuluyor ve belirsizliğin yarattığı kaygıyı aşıyorsunuz. Gizlenen şeyler ortaya çıktıkça üzerinizdeki o ağır baskı hissi azalacaktır. Artık mantığınızın ışığında daha sağlam adımlar atabilecek bir konumdasınız.",
    image: "/tarotCards/m18.jpg",
  },
  {
    id: 19,
    name: "The Sun (Güneş)",
    arcana: "Major",
    meaningUpright:
      "Hayatınızın en parlak, en neşeli ve en başarılı dönemlerinden birine adım atıyorsunuz. İçinizdeki çocuksu neşeyi dışarı yansıtmalı ve yakaladığınız başarıların tadını çıkarmalısınız. Pozitif enerjiniz çevrenize sıcaklık ve canlılık yayarken, her şeyin yolunda gittiğini hissedeceksiniz. Aydınlık bir gelecek, netlik ve büyük bir tatmin duygusu sizi bekliyor.",
    meaningReversed:
      "Bulutların arkasına saklanmış güneş gibi, neşeniz ve iyimserliğiniz geçici bir süre azalmış olabilir. Başarılarınızın farkında değilsiniz veya kendinizi yeterince takdir etmiyorsunuz. Karamsar bir ruh hali sizi aşağı çekiyor olsa da potansiyeliniz hala orada duruyor. İçsel ışığınızı yeniden parlatmak için nedenlerinizi hatırlamalı ve hayata küsmemelisiniz.",
    image: "/tarotCards/m19.jpg",
  },
  {
    id: 20,
    name: "Judgement (Mahkeme)",
    arcana: "Major",
    meaningUpright:
      "Geçmişinizi değerlendirdiğiniz, hatalarınızdan ders çıkarıp kendinizi affettiğiniz bir uyanış sürecindesiniz. Ruhsal bir çağrı duyuyor ve hayatınızı daha yüksek bir amaca hizmet edecek şekilde değiştirmek istiyorsunuz. Muhakeme yeteneğiniz sayesinde doğru ile yanlışı ayıracak ve kefaretinizi ödeyeceksiniz. Yeni bir hayat için eski kimliğinize veda ediyorsunuz.",
    meaningReversed:
      "Kendinizi sürekli yargılıyor ancak bir türlü ileriye dönük bir adım atamıyorsunuz. Geçmişin yükü altında ezilirken ruhsal çağrıları duymazdan geliyor ve değişimi reddediyorsunuz. Karar vermekte gecikmek fırsatların kaçmasına ve huzursuzluğun artmasına neden oluyor. Kendinize karşı daha merhametli olmalı ve geçmişi geride bırakacak cesareti bulmalısınız.",
    image: "/tarotCards/m20.jpg",
  },
  {
    id: 21,
    name: "The World (Dünya)",
    arcana: "Major",
    meaningUpright:
      "Büyük bir döngü tamamlandı; başarılarınızın meyvelerini topluyor ve bütünlük hissini yaşıyorsunuz. Hayatınızdaki eksik parçalar yerine otururken, kendinizi tam ve özgür hissedeceğiniz bir konumdasınız. Seyahatler, mezuniyetler veya hedeflere ulaşmak bu kartın getirdiği ödüllerdir. Artık yeni dünyalar keşfetmek için hazırsınız ve evrenle uyum içindesiniz.",
    meaningReversed:
      "Hedefe çok yaklaşmış olsanız da bir şeyler hala yarım kalmış gibi hissettiriyor olabilir. Durgunluk ve tamamlanmamış işler nedeniyle o beklediğiniz tatmin duygusuna ulaşamıyorsunuz. Kendi sınırlarınızı aşmakta zorlanıyor ve aynı döngülerin içinde sıkışıp kalıyorsunuz. Son bir çaba ve odaklanma ile bu eksik parçayı tamamlayıp zafere ulaşabilirsiniz.",
    image: "/tarotCards/m21.jpg",
  },

  // === KÜÇÜK ARKANA - DEĞNEKLER (WANDS) - 14 KART ===
  {
    id: 22,
    name: "Ace of Wands",
    arcana: "Minor",
    meaningUpright:
      "İçinizde büyük bir tutku ateşi yanıyor, yaratıcılığınızı konuşturacağınız yeni bir fırsat kapıda. Bu kart, ilham dolu başlangıçların ve cesur girişimlerin habercisidir. Elinize geçen bu potansiyeli değerlendirmek için hemen harekete geçmelisiniz. Enerjinizi odakladığınızda başaramayacağınız hiçbir şey yok.",
    meaningReversed:
      "Yeni bir şeye başlama isteğiniz var ancak enerjiniz dağınık veya yaratıcılığınız tıkanmış durumda. Gecikmeler ve motivasyon kaybı hevesinizi kırıyor olabilir. İçinizdeki ateşi neyin söndürdüğünü bulmalı ve hedeflerinizi netleştirmelisiniz. Acele etmek yerine doğru zamanı beklemek daha akıllıca olacaktır.",
    image: "/tarotCards/w01.jpg",
  },
  {
    id: 23,
    name: "Two of Wands",
    arcana: "Minor",
    meaningUpright:
      "Geleceğinizi şekillendirmek için önemli planlar yapmalı ve konfor alanınızın dışına bakmalısınız. Büyük bir potansiyele sahipsiniz, şimdi bu gücü nasıl yönlendireceğinize karar verme zamanı. Keşif arzunuz ve vizyonunuz sizi yeni ortaklıklara veya yolculuklara taşıyabilir. Dünya avuçlarınızın içinde, sadece rotanızı belirleyin.",
    meaningReversed:
      "Geleceğe dair korkularınız ve kararsızlığınız sizi mevcut durumunuza hapsetmiş olabilir. Plansızlık ve vizyon eksikliği nedeniyle karşınıza çıkan fırsatları göremiyorsunuz. Kendi gücünüzden şüphe etmek yerine, riskleri analiz edip harekete geçmelisiniz. Belirsizliğin sizi felç etmesine izin vermeden bir adım atın.",
    image: "/tarotCards/w02.jpg",
  },
  {
    id: 24,
    name: "Three of Wands",
    arcana: "Minor",
    meaningUpright:
      "Ektiğiniz tohumların yeşerdiğini görmeye başladınız, şimdi ufku gözleme ve büyüme zamanı. Ticari girişimleriniz veya kişisel projeleriniz beklediğinizden daha geniş bir etki alanına yayılabilir. Öngörünüz ve stratejik bekleyişiniz size büyük başarılar getirecektir. Kendinize güvenin, gemileriniz limana doğru yaklaşıyor.",
    meaningReversed:
      "Beklediğiniz haberlerin gecikmesi veya projelerinizin engellere takılması moralinizi bozabilir. Hayal kırıklığına kapılmak yerine, stratejinizi gözden geçirmeli ve eksiklikleri gidermelisiniz. Sabırsızlık ve öngörü eksikliği nedeniyle fırsatları kaçırıyor olabilirsiniz. Pes etmek yerine daha sağlam bir planla yola devam edin.",
    image: "/tarotCards/w03.jpg",
  },
  {
    id: 25,
    name: "Four of Wands",
    arcana: "Minor",
    meaningUpright:
      "Başarılarınızı kutlamak, sevdiklerinizle bir araya gelmek ve uyumun tadını çıkarmak için harika bir dönem. Evlilik, yeni bir ev veya tamamlanan bir projenin yarattığı huzur sizi mutlu edecektir. Kendinizi güvende ve topluluğunuzla bağ kurmuş hissedeceğiniz bu enerji çok besleyicidir. Temelleriniz sağlam, bu mutluluğu sonuna kadar hak ediyorsunuz.",
    meaningReversed:
      "Bulunduğunuz ortamda veya aile içinde bazı gerginlikler ve uyumsuzluklar baş gösteriyor olabilir. Kutlanması gereken başarılar gölgeleniyor veya istikrarsızlık hissi sizi huzursuz ediyor. Ev hayatınızdaki düzenin sarsılması motivasyonunuzu düşürebilir. Sorunları halının altına süpürmek yerine samimiyetle çözmeye odaklanmalısınız.",
    image: "/tarotCards/w04.jpg",
  },
  {
    id: 26,
    name: "Five of Wands",
    arcana: "Minor",
    meaningUpright:
      "Fikir ayrılıkları, tatlı bir rekabet ve kendinizi ispat etmeniz gereken bir mücadele içindesiniz. Bu çatışmalar aslında gelişmeniz ve yaratıcılığınızı tetiklemeniz için birer fırsattır. Enerjinizi doğru yönetirseniz, bu kargaşadan çok daha güçlü ve donanımlı çıkabilirsiniz. Sabırlı olun ve görüşlerinizi savunmaktan çekinmeyin.",
    meaningReversed:
      "Çevrenizdeki kargaşadan ve çatışmalardan o kadar yoruldunuz ki, artık sadece huzur istiyorsunuz. Rekabetten kaçmak veya uzlaşmaya çalışmak şu an için en mantıklı yol olabilir. Ancak sorunları çözmeden sadece kaçmak, ileride daha büyük krizlere yol açabilir. Kaosu yatıştırmak için yapıcı bir diyalog başlatmayı denemelisiniz.",
    image: "/tarotCards/w05.jpg",
  },
  {
    id: 27,
    name: "Six of Wands",
    arcana: "Minor",
    meaningUpright:
      "Zorlu bir mücadeleden galip çıktınız ve şimdi başarılarınızın takdir görme zamanı. Çevrenizdeki insanlar sizin azminizi ve zaferinizi kutlayarak size destek veriyorlar. Özgüveninizin tavan yaptığı bu dönemde, liderlik vasıflarınızla öne çıkıyorsunuz. Bu güzel enerjiyi gurura kapılmadan, mütevazı bir gururla kucaklayın.",
    meaningReversed:
      "Beklediğiniz takdiri göremiyor veya başarılarınızın gölgelendiğini hissediyor olabilirsiniz. Başarısızlık korkusu veya ego kırılması nedeniyle kendinizi yetersiz hissediyor olabilirsiniz. Başkalarının onayına çok fazla odaklanmak sizi asıl hedefinizden saptırıyor. Kendi değerinizi başkalarının alkışlarıyla değil, kendi emeğinizle ölçmeye çalışın.",
    image: "/tarotCards/w06.jpg",
  },
  {
    id: 28,
    name: "Seven of Wands",
    arcana: "Minor",
    meaningUpright:
      "Elde ettiğiniz başarıları korumak için sert bir savunma yapmalı ve azminizi korumalısınız. Çevrenizden gelen eleştirilere veya meydan okumalara karşı dik durmalı ve geri adım atmamalısınız. Haklı olduğunuz konularda kararlılık göstermek sizi çok daha saygın bir konuma taşıyacaktır. Avantajlı pozisyonunuzu bırakmayın ve gücünüze güvenin.",
    meaningReversed:
      "Üzerinizdeki baskı o kadar arttı ki, artık pes etme noktasına gelmiş olabilirsiniz. Kendinizi bunalmış hissediyor ve savunma yapacak enerjiyi bulmakta zorlanıyorsunuz. Sürekli birilerine bir şeyler kanıtlamaya çalışmak sizi ruhsal olarak tüketmiş olabilir. Sınırlarınızı belirlemeli ve ne zaman geri çekileceğinizi bilmelisiniz.",
    image: "/tarotCards/w07.jpg",
  },
  {
    id: 29,
    name: "Eight of Wands",
    arcana: "Minor",
    meaningUpright:
      "Hayatınızda her şey çok hızlı ilerlemeye başladı, ani haberler ve seyahatler kapıda. Bekleyen işlerinizin bir anda çözüldüğünü ve enerjinin hızla aktığını göreceksiniz. Bu hızlı tempoya ayak uydurmalı ve fırsatları kaçırmamak için tetikte olmalısınız. İletişim trafiğiniz artarken, net ve hızlı kararlar almanız gerekebilir.",
    meaningReversed:
      "Olayların hızı sizi panikletiyor olabilir veya yanlış yönlendirilmiş bir enerjiyle hareket ediyorsunuz. Planlarınızda ani gecikmeler yaşanabilir veya aldığınız haberler kafa karıştırıcı olabilir. Sabırsız davranmak hatalara yol açacağı için biraz yavaşlamalı ve durumu sakinlikle analiz etmelisiniz. Kontrolsüz hızın felaket getirebileceğini unutmayın.",
    image: "/tarotCards/w08.jpg",
  },
  {
    id: 30,
    name: "Nine of Wands",
    arcana: "Minor",
    meaningUpright:
      "Çok yoruldunuz ancak finiş çizgisine çok yakınsınız, son bir gayretle direncinizi korumalısınız. Geçmişteki tecrübeleriniz sizi daha güçlü ve tetikte kıldı, şimdi bu bilgeliği kullanma zamanı. Savunma hattınızı sağlam tutun ve hedefinize ulaşana kadar pes etmeyin. İçinizdeki dayanıklılık gücü, sandığınızdan çok daha yüksek.",
    meaningReversed:
      "Direnciniz tükenmek üzere ve kendinizi oldukça savunmasız hissediyorsunuz. Sürekli tetikte olmaktan kaynaklanan bir kronik yorgunluk ve tükenmişlik yaşıyor olabilirsiniz. Gardınızı düşürmek sizi incinebilir kılsa da bazen destek istemek bir zayıflık değildir. Artık kendinizi bu kadar hırpalamayı bırakıp dinlenmeye ihtiyaç duyuyorsunuz.",
    image: "/tarotCards/w09.jpg",
  },
  {
    id: 31,
    name: "Ten of Wands",
    arcana: "Minor",
    meaningUpright:
      "Sorumluluklarınızın ağırlığı altında eziliyor ve aşırı stresli bir dönemden geçiyorsunuz. Başarıya ulaşmak için çok fazla yükü tek başınıza sırtlanmış olabilirsiniz. Bu durumun sürdürülebilir olmadığını fark etmeli ve yardım istemeyi öğrenmelisiniz. Hedefe çok yakınsınız ama bu yükle oraya ulaşmak sağlığınızdan çalabilir.",
    meaningReversed:
      "Taşıyamayacağınız yükleri artık devretme veya tamamen bırakma vaktiniz geldi. Fiziksel veya ruhsal bir çöküş yaşamamak için sorumluluklarınızı paylaşmalı veya önceliklerinizi değiştirmelisiniz. Gereksiz yüklerden kurtulmak sizi inanılmaz derecede hafifletecek ve özgürleştirecektir. Kendi sınırlarınızı tanımalı ve 'hayır' demeyi öğrenmelisiniz.",
    image: "/tarotCards/w10.jpg",
  },
  {
    id: 32,
    name: "Page of Wands",
    arcana: "Minor",
    meaningUpright:
      "İçinizdeki macera hevesini tetikleyecek yeni fikirler ve heyecan verici mesajlar yolda. Meraklı ve coşkulu yapınızla yeni şeyler keşfetmek için can atıyorsunuz. Bu dönemde başlayacağınız bir hobi veya proje size büyük bir yaşam enerjisi katacaktır. Çocuksu bir ruhla hayata bakmak, yaratıcılığınızın önündeki engelleri kaldıracaktır.",
    meaningReversed:
      "Yeni bir şeyler yapma isteğiniz var ancak harekete geçecek cesareti veya motivasyonu bulamıyorsunuz. Kötümser tavırlar yaratıcılığınızı öldürüyor ve sizi olduğunuz yere sabitliyor olabilir. Aldığınız haberler hevesinizi kırabilir veya enerjinizi boşa harcadığınızı düşündürebilir. Kendi içinizdeki o kıvılcımı yeniden ateşlemek için nedenlerinizi hatırlayın.",
    image: "/tarotCards/w11.jpg",
  },
  {
    id: 33,
    name: "Knight of Wands",
    arcana: "Minor",
    meaningUpright:
      "Bitmek bilmeyen bir enerjiyle, tutkularınızın peşinden cesurca koşuyorsunuz. Maceracı ruhunuz sizi yeni yerler keşfetmeye ve riskli ama heyecan verici adımlar atmaya itiyor. Karizmanızla çevrenizi etkilerken, hedeflerinize ulaşmak için oldukça feri bir tavır sergiliyorsunuz. Hızlı kararlar ve aksiyonlar şu anki mottonuz olmalı.",
    meaningReversed:
      "Hırsınız ve düşüncesizliğiniz nedeniyle hatalı adımlar atıyor ve hüsrana uğruyor olabilirsiniz. Öfke patlamaları veya sabırsızlık ilişkilerinize zarar verebilir ve işlerin sarpa sarmasına neden olabilir. Bir işi bitirmeden diğerine atlıyor olmanız verimliliğinizi düşürüyor. Enerjinizi kontrol altına almalı ve biraz daha stratejik düşünmelisiniz.",
    image: "/tarotCards/w12.jpg",
  },
  {
    id: 34,
    name: "Queen of Wands",
    arcana: "Minor",
    meaningUpright:
      "Kendine güvenen, neşeli ve büyüleyici enerjinizle etrafınıza ışık saçıyorsunuz. Bağımsız yapınız ve yaratıcı gücünüz sayesinde her türlü zorluğun üstesinden neşeyle geliyorsunuz. Sosyal çevrenizde aranan bir isim haline gelirken, karizmanızla insanları etkiliyorsunuz. Hem kariyerde hem de özel hayatta parladığınız bir süreçtesiniz.",
    meaningReversed:
      "Özgüveniniz kıskançlığa veya aşırı bencil tavırlara dönüşmüş olabilir. Kendi isteklerinizi dayatırken başkalarının duygularını hiçe sayıyor ve manipülatif davranıyor olabilirsiniz. İçsel bir huzursuzluk ve tatminsizlik yaşıyor olmanız sizi agresif kılabilir. Kendi ışığınızı başkalarını gölgede bırakmak için değil, aydınlatmak için kullanmalısınız.",
    image: "/tarotCards/w13.jpg",
  },
  {
    id: 35,
    name: "King of Wands",
    arcana: "Minor",
    meaningUpright:
      "Vizyoner bakış açınız ve doğal liderlik vasıflarınızla büyük projelere imza atabilirsiniz. Girişimci ruhunuz ve cesaretiniz sayesinde çevrenizdeki insanlara ilham veriyorsunuz. Sorumluluk almaktan kaçmıyor ve hedeflerinize kararlılıkla yürüyorsunuz. Gücünüzü yapıcı ve yaratıcı bir şekilde kullanıyorsunuz, başarı sizinle.",
    meaningReversed:
      "Liderlik vasıflarınız tiranlığa veya dürtüsel kararlara dönüşmüş durumda. Acımasız tavırlarınız ve her şeyi ben bilirim edanız çevrenizdeki insanları sizden uzaklaştırıyor olabilir. Sabırsızlık ve aşırı hırs nedeniyle stratejik hatalar yapıyor ve enerjinizi boşa harcıyorsunuz. Gücünüzü şefkatle dengelemeli ve ekip çalışmasına önem vermelisiniz.",
    image: "/tarotCards/w14.jpg",
  },

  // === KÜÇÜK ARKANA - KUPALAR (CUPS) - 14 KART ===
  {
    id: 36,
    name: "Ace of Cups",
    arcana: "Minor",
    meaningUpright:
      "Duygusal dünyanızda yepyeni ve taptaze bir uyanış başlıyor, kalbiniz sevgiyle dolup taşıyor. Yeni bir aşk, derin bir dostluk veya ruhsal bir farkındalık kapınızı çalabilir. Sezgileriniz oldukça güçlü, duygularınızı ifade etmekten çekinmemelisiniz. İçsel huzuru bulacağınız ve mutluluğun tadına varacağınız bir süreçtesiniz.",
    meaningReversed:
      "Duygularınızı bastırıyor veya kendinizi aşka ve sevgiye kapatmış olabilirsiniz. Duygusal blokajlar nedeniyle içsel bir boşluk hissediyor ve hayal kırıklığı yaşıyorsunuz. Sezgilerinizden koptuğunuz için kararlarınızda yanılıyor olabilirsiniz. Kendi kendinizi sevmeyi ve yaralarınızı iyileştirmeyi önceliğiniz haline getirmelisiniz.",
    image: "/tarotCards/c01.jpg",
  },
  {
    id: 37,
    name: "Two of Cups",
    arcana: "Minor",
    meaningUpright:
      "Ruhsal olarak derin bağlar kuracağınız bir birliktelik veya ortaklık gündeminizde. Karşılıklı çekim, uyum ve anlayışın hakim olduğu bu süreçte kendinizi çok mutlu hissedeceksiniz. Birisiyle fikir birliğine varmak veya ilişkinizi bir üst seviyeye taşımak için harika bir zaman. Sevgi dolu paylaşımlar enerjinizi yükseltecektir.",
    meaningReversed:
      "İlişkilerinizde bir uyuşmazlık, güvensizlik veya kopukluk yaşıyor olabilirsiniz. Beklediğiniz o derin bağın kurulamaması veya partnerinizle yaşadığınız tartışmalar sizi üzebilir. Ortaklıklarda çıkarların çatışması ve iletişimsizlik süreci zorlaştırabilir. Önce kendi dengenizi bulmalı ve samimiyetle sorunları konuşmaya çalışmalısınız.",
    image: "/tarotCards/c02.jpg",
  },
  {
    id: 38,
    name: "Three of Cups",
    arcana: "Minor",
    meaningUpright:
      "Arkadaşlarınızla, ailenizle veya topluluğunuzla bir araya gelip kutlama yapacağınız neşeli bir dönem. Paylaşmanın, işbirliğinin ve dostluğun getirdiği mutluluk ruhunuzu besleyecektir. Sosyal hayatınız canlanırken, ortak başarıları kutlamak size iyi gelecektir. Hayatın güzelliklerini sevdiklerinizle paylaşın, enerji paylaştıkça çoğalır.",
    meaningReversed:
      "Sosyal çevrenizde bazı dedikodular, kıskançlıklar veya aşırıya kaçan eğlenceler huzurunuzu bozabilir. Topluluk içinden kendinizi dışlanmış hissediyor veya sahte dostluklardan yorulmuş olabilirsiniz. Eğlence hayatının sorumluluklarınızın önüne geçmesine izin vermemelisiniz. İlişkilerinizdeki samimiyeti sorgulamalı ve enerjinizi tüketen ortamlardan uzaklaşmalısınız.",
    image: "/tarotCards/c03.jpg",
  },
  {
    id: 39,
    name: "Four of Cups",
    arcana: "Minor",
    meaningUpright:
      "Elinizdekilerden sıkılmış, genel bir bıkkınlık ve ilgisizlik hali içinde olabilirsiniz. Sunulan fırsatlara karşı gözünüzü kapatmış, kendi iç dünyanızdaki huzursuzluğa odaklanmışsınız. Hayatın size sunduğu o 'dördüncü kupayı' yani yeni imkanı fark etmeniz gerekiyor. Biraz silkinmeli ve minnet duyacak yeni şeyler bulmalısınız.",
    meaningReversed:
      "İçinde bulunduğunuz uyuşukluktan ve ilgisizlikten yavaş yavaş sıyrılmaya başlıyorsunuz. Kaçırdığınız fırsatların farkına vararak yeniden harekete geçme isteğiyle doluyorsunuz. Hayata karşı motivasyonunuz artarken, yeni olasılıklara kapınızı açıyorsunuz. Kendi kabuğunuzdan çıkıp dış dünyayla tekrar bağ kurmak size çok iyi gelecektir.",
    image: "/tarotCards/c04.jpg",
  },
  {
    id: 40,
    name: "Five of Cups",
    arcana: "Minor",
    meaningUpright:
      "Geçmişteki bir kayba veya hayal kırıklığına o kadar odaklanmışsınız ki, arkanızdaki sağlam duran kupaları göremiyorsunuz. Pişmanlıklarınız ve kederiniz sizi kör etmiş olabilir, bu durumdan kurtulmak için bakış açınızı değiştirmelisiniz. Yas tutmak doğaldır ancak orada takılıp kalmamalısınız. Hala sahip olduğunuz güzelliklerin farkına varın.",
    meaningReversed:
      "Artık acılarınızı geride bırakıyor ve iyileşme sürecine adım atıyorsunuz. Kayıplarınızı kabullenerek önünüze bakmayı öğreniyor, geleceğe dair umutlarınızı yeşertiyorsunuz. Hayal kırıklıklarından ders çıkararak daha olgun bir ruh haline büründünüz. Yaralarınız kapandıkça hayatın size sunduğu yeni şansları kucaklamaya hazır olacaksınız.",
    image: "/tarotCards/c05.jpg",
  },
  {
    id: 41,
    name: "Six of Cups",
    arcana: "Minor",
    meaningUpright:
      "Geçmişten gelen birisiyle karşılaşabilir veya nostalji dolu anlar yaşayabilirsiniz. Çocukluk masumiyetini, eski dostlukları ve saf sevgiyi hatırlatan olaylar sizi gülümsetecektir. İçinizdeki çocuğu mutlu edecek aktivitelere yönelmek ruhunuza iyi gelecektir. Geçmişin güzel anıları, bugününüzü aydınlatacak birer ilham kaynağı olabilir.",
    meaningReversed:
      "Geçmişe o kadar takılı kalmışsınız ki, şimdiki anın gerçeklerinden kaçıyorsunuz. Çocukluk anılarına veya eski ilişkilere duyduğunuz özlem, büyümenizi ve gelişmenizi engelliyor olabilir. Artık çocuksu tavırları bırakıp yetişkin sorumluluklarını üstlenme vaktiniz geldi. Geçmişi güzel bir anı olarak kalbinizde tutun ama geleceğe yürümekten vazgeçmeyin.",
    image: "/tarotCards/c06.jpg",
  },
  {
    id: 42,
    name: "Seven of Cups",
    arcana: "Minor",
    meaningUpright:
      "Önünüzde pek çok seçenek var ancak hangisinin gerçek hangisinin illüzyon olduğunu ayırt etmekte zorlanıyorsunuz. Hayaller kurmak güzeldir fakat ayaklarınızın yere basması gereken bir dönemdesiniz. Kafa karışıklığı ve aşırı seçenekler sizi hareketsiz bırakabilir. Dileklerinizi gerçekleştirirken gerçekçi olmayı ve önceliklerinizi belirlemeyi unutmayın.",
    meaningReversed:
      "Hayaller dünyasından çıkıp gerçeklerle yüzleşiyor ve kafa netliğine ulaşıyorsunuz. Seçenekler arasından sizin için en doğru olanı belirleyerek karar verme sürecini tamamlıyorsunuz. İllüzyonların sizi yanıltmasına izin vermeden, somut adımlar atmaya hazırsınız. Belirsizliğin bitmesiyle birlikte üzerinizdeki o kafa karışıklığı yükü kalkacaktır.",
    image: "/tarotCards/c07.jpg",
  },
  {
    id: 43,
    name: "Eight of Cups",
    arcana: "Minor",
    meaningUpright:
      "Manevi olarak tatmin etmeyen bir durumu veya ilişkiyi arkanızda bırakıp yeni bir arayışa çıkıyorsunuz. Bu bir vazgeçiş değil, aksine daha yüksek bir amaç için yapılan kutsal bir yolculuktur. Elinizdekilerin size yetmediğini fark ettiğiniz bu süreçte yalnız kalıp ruhunuzu dinlemelisiniz. Duygusal bir olgunlukla vedalaşmayı öğreniyorsunuz.",
    meaningReversed:
      "Gitmeniz gerektiğini bildiğiniz halde korkularınız nedeniyle olduğunuz yerde sayıyorsunuz. Belirsizlik ve yalnız kalma endişesi, size artık fayda sağlamayan durumlara tutunmanıza neden oluyor. Kararsızlığınız sizi ruhsal olarak yıpratırken, kendinizi bir kısır döngüde hissedebilirsiniz. Değişimden korkmak yerine, yeni yolculuğun size getireceği bilgeliğe odaklanın.",
    image: "/tarotCards/c08.jpg",
  },
  {
    id: 44,
    name: "Nine of Cups",
    arcana: "Minor",
    meaningUpright:
      "Dileklerinizin gerçekleştiği, kendinizi oldukça şanslı ve tatmin olmuş hissedeceğiniz bir dönemdesiniz. Maddi ve manevi zenginliğin keyfini çıkarırken, hayattan aldığınız zevk doruktadır. Bu kart 'dilek kartı' olarak da bilinir, istediğiniz şeylerin ayağınıza gelmesi an meselesidir. Kendi başarılarınızla gurur duyun ve bu mutluluğu doyasıya yaşayın.",
    meaningReversed:
      "İstediğiniz şeylere ulaşmış olsanız bile içsel bir tatminsizlik ve boşluk hissediyor olabilirsiniz. Açgözlülük veya sadece maddi zevklere odaklanmak ruhunuzu beslemeye yetmiyor. Başarılarınızı başkalarına gösteriş yapmak için kullanıyor olmanız sizi yalnızlaştırabilir. Gerçek mutluluğun dışsal ödüllerde değil, içsel huzurda olduğunu hatırlamalısınız.",
    image: "/tarotCards/c09.jpg",
  },
  {
    id: 45,
    name: "Ten of Cups",
    arcana: "Minor",
    meaningUpright:
      "Duygusal anlamda tam bir doyum, mutlu bir aile hayatı ve kalıcı huzurun simgesidir. Sevdiklerinizle olan bağlarınızın güçlendiği, kendinizi güvende ve seviliyor hissettiğiniz bir süreçtesiniz. Gerçek sevginin ve uyumun yarattığı o muazzam enerjiyi tüm hücrelerinizde hissedeceksiniz. Hayallerinizdeki o huzurlu yuvayı veya ortamı kurmak üzeresiniz.",
    meaningReversed:
      "Ev hayatınızda veya yakın ilişkilerinizde bazı kopukluklar, tartışmalar ve huzursuzluklar yaşanıyor olabilir. Beklediğiniz o mükemmel uyumun bozulması sizi derinden üzüyor ve hayal kırıklığına uğratıyor. Sahte bir mutluluk maskesi takıyor olmak ruhunuzu yorabilir. Sorunları görmezden gelmek yerine, sevgiyle ve dürüstlükle bağları onarmaya çalışmalısınız.",
    image: "/tarotCards/c10.jpg",
  },
  {
    id: 46,
    name: "Page of Cups",
    arcana: "Minor",
    meaningUpright:
      "Sezgisel tarafınızın uyandığı, sanatla ilgilenmeye başladığınız veya duygusal bir haber aldığınız bir dönem. İçinizdeki naif ve hassas ruhu dışarı yansıtmalı, yaratıcı projeler üretmelisiniz. Beklenmedik bir teklif veya sürpriz bir mesaj sizi oldukça mutlu edebilir. Duygularınızı bir çocuk saflığıyla ifade etmekten çekinmeyin.",
    meaningReversed:
      "Duygusal dünyanızda bir güvensizlik, şüphecilik ve aşırı hassasiyet hakim olabilir. Aldığınız haberler kafa karıştırıcı olabilir veya hayal dünyasında yaşarken gerçekleri ihmal ediyor olabilirsiniz. Yaratıcılığınızın önünde duygusal engeller var ve kendinizi ifade etmekte zorlanıyorsunuz. Gerçeklerden kaçmak yerine, duygularınızı daha sağlam bir zemine oturtmalısınız.",
    image: "/tarotCards/c11.jpg",
  },
  {
    id: 47,
    name: "Knight of Cups",
    arcana: "Minor",
    meaningUpright:
      "Romantizmin, cazibenin ve duygusal tekliflerin ön planda olduğu heyecan verici bir süreçtesiniz. Hayalperest bir ruhla ideallerinizin peşinden gidiyor ve çevrenize nezaket yayıyorsunuz. Size sunulacak bir fırsat veya beklediğiniz o romantik adım gerçekleşebilir. Kalbinizin sesini dinleyerek naif adımlar atmaya devam edin.",
    meaningReversed:
      "Gerçeklerden tamamen kopmuş, sadece hayaller dünyasında yaşayan narsist bir tavır sergiliyor olabilirsiniz. Verdiğiniz sözleri tutmakta zorlanıyor ve duygusal tutarsızlıklarınızla çevrenizi yoruyorsunuz. Samimiyetsiz yaklaşımlar veya hayal kırıklığı yaratan tekliflerle karşılaşabilirsiniz. Ayaklarınızın yere basması gerektiğini unutmadan, duygularınızı disipline etmelisiniz.",
    image: "/tarotCards/c12.jpg",
  },
  {
    id: 48,
    name: "Queen of Cups",
    arcana: "Minor",
    meaningUpright:
      "Şefkat, empati ve derin bir duygusal anlayışla çevrenizdeki insanlara rehberlik ediyorsunuz. Duygusal dengenizi koruyarak sezgilerinizle hareket ettiğiniz bu dönemde, çok besleyici bir enerjidesiniz. İnsanların size dertlerini anlatmak için can attığı, güvenilir bir liman gibisiniz. İçsel huzurunuz ve bilgeliğiniz en büyük gücünüzdür.",
    meaningReversed:
      "Duygusal dünyanızda aşırı hassasiyet, bağımlılık ve kurban psikolojisi hakim olabilir. Başkalarının acılarını o kadar fazla yükleniyorsunuz ki, kendi merkezinizi kaybedip depresifleşiyorsunuz. Manipülatif duygusal tavırlar sergileyebilir veya sevdiklerinize fazla bağımlı hale gelebilirsiniz. Önce kendi sınırlarınızı çizmeli ve kendi ruhunuzu şifalandırmalısınız.",
    image: "/tarotCards/c13.jpg",
  },
  {
    id: 49,
    name: "King of Cups",
    arcana: "Minor",
    meaningUpright:
      "Duygularınızı muazzam bir şekilde kontrol altına aldınız, bilgelik ve cömertlikle hareket ediyorsunuz. Çevrenizdeki krizleri sakinliğinizle yatıştırıyor ve mantıklı ama duyarlı kararlar alıyorsunuz. Duygusal zekanızın doruk noktasında olduğu bu süreçte, hem kendinize hem başkalarına şifa veriyorsunuz. Sizin güven veren duruşunuz her kapıyı açacaktır.",
    meaningReversed:
      "Duygularınızı başkalarını kontrol etmek veya manipüle etmek için kullanan soğuk bir tavır takınıyor olabilirsiniz. İçsel fırtınalarınızı bastırırken dışarıya karşı mesafeli ve duyarsız görünebilirsiniz. Alkol veya başka kaçış yollarına yönelerek gerçek hislerinizden uzaklaşıyor olmanız muhtemeldir. Duygularınızı bastırmak yerine, onlarla dürüstçe yüzleşmeyi denemelisiniz.",
    image: "/tarotCards/c14.jpg",
  },

  // === KÜÇÜK ARKANA - KILIÇLAR (SWORDS) - 14 KART ===
  {
    id: 50,
    name: "Ace of Swords",
    arcana: "Minor",
    meaningUpright:
      "Zihninizde şimşekler çakıyor; büyük bir netlik, yeni bir fikir ve zafer kapıda. Karmaşık durumları mantığınızın keskin kılıcıyla çözebilir ve hakikate ulaşabilirsiniz. İletişim yeteneğinizin güçlendiği bu dönemde, dürüstlükle atacağınız adımlar sizi başarıya taşıyacaktır. Zihinsel gücünüzü en yüksek potansiyeliyle kullanmaya hazırsınız.",
    meaningReversed:
      "Kafa karışıklığı, iletişim kazaları ve kaos içinde yönünüzü kaybetmiş hissediyor olabilirsiniz. Aldığınız kararların sonuçları haksızlıklara veya karmaşaya yol açabilir. Zihinsel bir blokaj yaşıyor ve gerçekleri görmekte zorlanıyorsunuz. Aceleyle verilmiş keskin kararlar vermekten kaçınmalı, önce zihninizi dinginleştirmeye çalışmalısınız.",
    image: "/tarotCards/s01.jpg",
  },
  {
    id: 51,
    name: "Two of Swords",
    arcana: "Minor",
    meaningUpright:
      "İki seçenek veya iki fikir arasında sıkışmış, bir çıkmaz sokakta hissediyor olabilirsiniz. Gözlerinizi gerçeklere kapatmış, dengeyi korumaya çalışırken aslında hareketsiz kalıyorsunuz. Artık bir karar vermeli ve o zorlu adımı atmalısınız. Karar vermemek, yanlış bir karar vermekten bazen çok daha yorucu olabilir.",
    meaningReversed:
      "Kararsızlık döneminiz sona eriyor, artık gerçekleri tüm çıplaklığıyla görmeye başlıyorsunuz. Sizi kısıtlayan düşüncelerden kurtulup gerekli olan bilgileri toplayarak harekete geçme aşamasındasınız. Kafa karışıklığı yerini netliğe bırakırken, o zorlu kararı verme cesaretini kendinizde bulacaksınız. Artık o kilitli kapıyı açmanın tam zamanı.",
    image: "/tarotCards/s02.jpg",
  },
  {
    id: 52,
    name: "Three of Swords",
    arcana: "Minor",
    meaningUpright:
      "Maalesef derin bir kalp kırıklığı, keder veya bir ayrılık sürecinden geçiyor olabilirsiniz. Bu acı kaçınılmaz görünse de ruhsal gelişiminiz için gerekli bir arınma evresidir. Duygularınızı bastırmak yerine yaşamanıza izin vermeli, acının içinden geçerek şifalanmalısınız. Bu süreç size dürüstlük ve dayanıklılık konusunda çok şey öğretecektir.",
    meaningReversed:
      "Yaşadığınız o ağır keder ve acı yavaş yavaş azalmaya başlıyor, iyileşme süreci hızlanıyor. Kendinizi veya başkalarını affetmeyi öğrenerek ruhunuzu özgürleştiriyorsunuz. Geçmişteki kalp kırıklıklarının üzerinizdeki etkisi zayıflarken, hayata yeniden umutla bakmaya başlıyorsunuz. Acılarınızı birer tecrübeye dönüştürerek daha güçlü bir şekilde ayağa kalkıyorsunuz.",
    image: "/tarotCards/s03.jpg",
  },
  {
    id: 53,
    name: "Four of Swords",
    arcana: "Minor",
    meaningUpright:
      "Zihinsel ve fiziksel olarak çok yoruldunuz, şimdi tam anlamıyla dinlenme ve inziva vaktidir. Meditasyon yaparak, sessizliğe bürünerek ruhunuzu yenilemeli ve olayları uzaktan izlemelisiniz. Harekete geçmek için uygun bir zaman değil, enerjinizi toplamanız gerekiyor. Bu duraklama, ileride atacağınız adımların çok daha sağlam olmasını sağlayacaktır.",
    meaningReversed:
      "Dinlenmeniz gereken bir dönemde sürekli bir huzursuzluk içinde koşturuyor ve kendinizi tüketiyorsunuz. İyileşme sürecini yarım bırakıp erkenden sahaya çıkmak sizi daha büyük bir tükenmişliğe sürükleyebilir. Zihninizdeki gürültü bir türlü dinmiyor ve uyku sorunları yaşıyor olabilirsiniz. Ruhunuzun acil olarak bir mola vermeye ihtiyacı olduğunu görmelisiniz.",
    image: "/tarotCards/s04.jpg",
  },
  {
    id: 54,
    name: "Five of Swords",
    arcana: "Minor",
    meaningUpright:
      "Bir tartışmayı veya rekabeti kazanmış olabilirsiniz ancak bu zaferin bedeli beklediğinizden ağır olabilir. Kazanma hırsınız nedeniyle çevrenizdeki insanları kırmış ve kendinizi yalnızlaştırmış olabilirsiniz. 'Pirus Zaferi' gibi görünen bu durumdan ders çıkarmalı ve dürüstlüğünüzü sorgulamalısınız. Bazen kazanmak aslında büyük bir kayıp demektir.",
    meaningReversed:
      "Artık anlamsız çatışmalardan ve ego savaşlarından yoruldunuz, uzlaşma arayışına giriyorsunuz. Hatalarınızı kabul ederek ve karşı tarafın da haklılık payını görerek gerginliği bitirme niyetindesiniz. Kayıpları telafi etmek ve bozulan ilişkileri onarmak için uygun bir enerji var. Silahları bırakıp barışçıl bir diyalog kurmak sizi çok daha huzurlu kılacaktır.",
    image: "/tarotCards/s05.jpg",
  },
  {
    id: 55,
    name: "Six of Swords",
    arcana: "Minor",
    meaningUpright:
      "Zorlu ve fırtınalı bir süreci geride bırakıp, daha sakin ve huzurlu sulara doğru yol alıyorsunuz. Bu bir hüzünlü gidiş olsa da geleceğiniz için gerekli olan mantıklı bir uzaklaşmadır. Sorunlarınızı çözemeseniz bile onlardan mesafe alarak iyileşme fırsatı yakalayacaksınız. Zihninizdeki ağırlıkların azaldığı ve yavaşça toparlandığınız bir süreçtesiniz.",
    meaningReversed:
      "Geçmişin sorunlarından bir türlü kopamıyor, sürekli aynı kederli limana geri dönüyorsunuz. Değişime ve uzaklaşmaya karşı gösterdiğiniz direnç iyileşmenizi geciktiriyor. Zorlu bir geçiş sürecindesiniz ancak yüklerinizden kurtulmayı reddettiğiniz için sandaldan düşme riski yaşıyorsunuz. Artık akışa teslim olmalı ve o fırtınalı kıyıyı gerçekten terk etmelisiniz.",
    image: "/tarotCards/s06.jpg",
  },
  {
    id: 56,
    name: "Seven of Swords",
    arcana: "Minor",
    meaningUpright:
      "Büyük bir gizlilikle hareket ediyor, stratejik oyunlar peşinde koşuyor veya bir şeylerden kaçmaya çalışıyorsunuz. Çevrenizde dürüst olmayan kişiler olabilir veya siz kestirme yollardan gitmeyi tercih ediyor olabilirsiniz. Bu aldatıcı enerji kısa vadede kazanç getirse de uzun vadede başınıza iş açabilir. Adımlarınızı dürüstlük ilkesinden şaşmadan atmaya özen gösterin.",
    meaningReversed:
      "Gizlenen sırlar ortaya çıkıyor, yapılan planlar bozuluyor ve gerçekler tüm çıplaklığıyla görülüyor. Artık kaçacak yeriniz kalmadı; yaptıklarınızın veya size yapılanların sorumluluğuyla yüzleşme zamanı. Dürüst olmanın ve vicdanınızı temizlemenin getirdiği o garip rahatlamayı hissedeceksiniz. Maskelerin düştüğü bu dönemde kendinizle barışmaya odaklanmalısınız.",
    image: "/tarotCards/s07.jpg",
  },
  {
    id: 57,
    name: "Eight of Swords",
    arcana: "Minor",
    meaningUpright:
      "Kendinizi çaresiz, kısıtlanmış ve kurban psikolojisi içinde hissediyor olabilirsiniz. Ancak göz bağınız ve etrafınızdaki kılıçlar aslında sizin kendi zihninizin yarattığı illüzyonlardır. Küçük bir hareketle bağlarınızdan kurtulabilecek güce sahipsiniz ancak korkularınız sizi felç etmiş. Bakış açınızı değiştirirseniz özgürlüğe giden yolu hemen göreceksiniz.",
    meaningReversed:
      "Zihninizdeki o karanlık perdeler kalkmaya başladı, artık özgürlüğünüze giden kapıyı görebiliyorsunuz. Kendinizi sınırlayan düşünce kalıplarından kurtularak yeni bir bakış açısı kazanıyorsunuz. Çaresizlik hissinin yerini cesaret ve farkındalık alırken, kendi gücünüzü yeniden keşfediyorsunuz. Artık kurban rolünden çıkıp hayatınızın kontrolünü elinize alıyorsunuz.",
    image: "/tarotCards/s08.jpg",
  },
  {
    id: 58,
    name: "Nine of Swords",
    arcana: "Minor",
    meaningUpright:
      "Aşırı kaygı, uykusuz geceler ve kabuslarla boğuştuğunuz zorlu bir zihinsel süreçtesiniz. Olayları zihninizde o kadar büyütüyorsunuz ki, gerçek olmayan felaket senaryoları içinde boğuluyorsunuz. Bu kılıçlar aslında sadece sizin korkularınız; dış dünyada bu kadar büyük bir tehlike yok. Yardım istemeli ve zihninizdeki bu yoğun baskıyı biriyle paylaşmalısınız.",
    meaningReversed:
      "En kötü kabuslarınız geride kaldı, artık o yoğun kaygı ve stres döneminden çıkıyorsunuz. Korkularınızla yüzleşmenin verdiği güçle, zihinsel bir ferahlama yaşıyorsunuz. Olayların sandığınız kadar kötü olmadığını fark ederek yavaş yavaş huzura kavuşuyorsunuz. Artık mışıl mışıl uyuyabileceğiniz ve umutla uyanacağınız bir süreçtesiniz.",
    image: "/tarotCards/s09.jpg",
  },
  {
    id: 59,
    name: "Ten of Swords",
    arcana: "Minor",
    meaningUpright:
      "Duygusal veya profesyonel anlamda tam bir yıkım ve ihanetle gelen sert bir sonlanma yaşıyorsunuz. Acınız çok taze ve kendinizi en dip noktada hissediyor olabilirsiniz. Ancak unutmayın ki, artık daha kötüye gitme şansınız yok; artık yükselme zamanı başlıyor. Güneşin doğmasından hemen önceki o en karanlık andasınız, şafağa hazır olun.",
    meaningReversed:
      "Yaşadığınız o büyük yıkımdan sonra yeniden doğuş süreciniz başlıyor, dip noktadan çıkışa geçiyorsunuz. Geçmişteki ihanetlerin ve sonlanmaların etkisinden kurtulurken, hayata karşı daha dirençli hale geliyorsunuz. Yaralarınız kapandıkça önünüzdeki o taptaze başlangıcın kokusunu almaya başlayacaksınız. Her bitiş, çok daha güçlü bir başlangıcın habercisidir.",
    image: "/tarotCards/s10.jpg",
  },
  {
    id: 60,
    name: "Page of Swords",
    arcana: "Minor",
    meaningUpright:
      "Sorgulayıcı, meraklı ve zihinsel enerjisi çok yüksek olan yeni bir sürece giriyorsunuz. Yeni fikirler üretmek, bilgi toplamak ve iletişim ağınızı genişletmek için harika bir zaman. Genç ve dinamik bir enerjiyle çevrenizdeki olayları analiz ediyorsunuz. Ancak bu merakınız bazen çevreniz tarafından fazla 'araştırmacı' veya 'müdahaleci' bulunabilir.",
    meaningReversed:
      "Merakınızın dedikoduya veya anlamsız boş konuşmalara dönüştüğü bir dönem olabilir. Verdiğiniz sözleri tutmakta zorlanıyor veya bilgileri yanlış/eksik aktararak kafa karıştırıyorsunuz. Agresif bir dil kullanmak veya birilerine laf sokmaya çalışmak sizi antipatik kılabilir. Zihinsel enerjinizi başkalarını eleştirmek yerine kendinizi geliştirmek için kullanmalısınız.",
    image: "/tarotCards/s11.jpg",
  },
  {
    id: 61,
    name: "Knight of Swords",
    arcana: "Minor",
    meaningUpright:
      "Hırslı, kararlı ve oldukça aceleci bir tavırla hedefinize doğru hücum ediyorsunuz. Mantığınızın sesini dinleyerek duyguları bir kenara bırakmış, sadece başarıya odaklanmışsınız. Hızlı ve keskin zekanızla karşınıza çıkan tüm sorunları birer birer bertaraf ediyorsunuz. Ancak bu hızınız bazen etrafınızdaki insanları göz ardı etmenize neden olabilir.",
    meaningReversed:
      "Hırsınızın kurbanı oluyor, saldırgan ve sabırsız tavırlarınızla her şeyi mahvediyor olabilirsiniz. Düşüncesizce atılan adımlar büyük hatalara ve geri dönüşü zor kayıplara yol açabilir. Başkalarının fikirlerine saygı duymadan sadece kendi doğrunuzu dayatmak sizi yalnızlaştıracaktır. Biraz yavaşlamalı, enerjinizi kontrol etmeli ve sağduyuyla hareket etmelisiniz.",
    image: "/tarotCards/s12.jpg",
  },
  {
    id: 62,
    name: "Queen of Swords",
    arcana: "Minor",
    meaningUpright:
      "Bağımsız, keskin zekalı ve son derece dürüst bir kadın enerjisiyle hareket ediyorsunuz. Duygularınızı mantığınızla filtreleyerek olaylara net bir bakış açısıyla yaklaşıyorsunuz. Çevrenizde doğruları söylemekten çekinmeyen, otoriter ama adaletli bir figür olarak tanınıyorsunuz. Zihinsel sınırlarınızı çok iyi çizmiş, kendi ayaklarınız üzerinde dimdik duruyorsunuz.",
    meaningReversed:
      "Dürüstlüğünüz zalimliğe ve aşırı eleştirel bir tavra dönüşmüş olabilir. İnsanlara karşı soğuk, mesafeli ve iğneleyici bir dil kullanarak onları kendinizden uzaklaştırıyorsunuz. Acımasızca yaptığınız değerlendirmeler duygusal bağlarınızı koparabilir ve sizi yalnızlığa mahkum edebilir. Mantığınızı biraz şefkatle yumuşatmalı ve daha anlayışlı olmaya çalışmalısınız.",
    image: "/tarotCards/s13.jpg",
  },
  {
    id: 63,
    name: "King of Swords",
    arcana: "Minor",
    meaningUpright:
      "Entelektüel birikiminiz, otoriteniz ve hakikate olan bağlılığınızla çevrenize rehberlik ediyorsunuz. Mantıklı ve etik kararlar alarak adaleti sağlamaya odaklanmış, rasyonel bir lider figüründesiniz. Olayları en ince ayrıntısına kadar analiz ederek en doğru stratejiyi belirleyebilirsiniz. Sözünüzün geçtiği, saygı duyulan ve güvenilen bir otorite konumundasınız.",
    meaningReversed:
      "Gücünüzü kötüye kullanan, manipülatif ve acımasız bir tavır takınıyor olabilirsiniz. Duygusuz ve katı kurallarınızla çevrenizdeki insanlara baskı kuruyor ve huzursuzluk yaratıyorsunuz. Zekanız kurnazlığa dönüşmüş durumda, bu da güvenilirliğinizi sarsıyor olabilir. Egolarınızdan arınmalı ve mantığınızı insanlık yararına kullanacak şekilde terbiye etmelisiniz.",
    image: "/tarotCards/s14.jpg",
  },

  // === KÜÇÜK ARKANA - TILSIMLAR (PENTACLES) - 14 KART ===
  {
    id: 64,
    name: "Ace of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Maddi dünyada yepyeni ve çok sağlam bir temel atma fırsatı kapınızı çalıyor. Yeni bir iş, karlı bir yatırım veya beklenmedik bir para akışı yaşayabilirsiniz. Bu kart bereketin, bolluğun ve fiziksel dünyadaki başarıların tohumudur. Elinize geçen bu imkanı sabırla ve çalışkanlıkla beslerseniz, uzun vadede büyük bir servet elde edebilirsiniz.",
    meaningReversed:
      "Karşınıza çıkan maddi bir fırsatı dikkatsizliğiniz nedeniyle kaçırıyor olabilirsiniz. Finansal olarak güvensiz hissettiğiniz, planlarınızın aksadığı veya paranın elinizden hızlıca kaydığı bir dönemdir. Yatırım yapmak için uygun bir zaman olmayabilir, riskli kararlar almaktan kaçınmalısınız. Temelleri sağlam atmadığınız için beklediğiniz berekete ulaşmakta zorlanıyorsunuz.",
    image: "/tarotCards/p01.jpg",
  },
  {
    id: 65,
    name: "Two of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Aynı anda birden fazla sorumluluğu başarıyla yönetmeye çalışıyor, hayatınızda bir denge kurmaya çabalıyorsunuz. Esnek yapınız ve uyum sağlama yeteneğiniz sayesinde zorlukların üstesinden neşeyle geliyorsunuz. Maddi veya profesyonel konularda önceliklerinizi iyi belirlemeli ve değişime açık olmalısınız. Hayatın ritmine ayak uydurarak dengede kalmayı başarıyorsunuz.",
    meaningReversed:
      "Hayatınızda bir dengesizlik, plansızlık ve kaos hakim; yetişmeye çalıştığınız her şey ellerinizden kayıyor gibi hissedebilirsiniz. Çok fazla yükü aynı anda sırtlanmanız sizi yoruyor ve hata yapmanıza neden oluyor. Finansal kararlarınızda bir karmaşa yaşayabilir veya zaman yönetimi konusunda başarısız olabilirsiniz. Artık durup önceliklerinizi netleştirmeniz gerekiyor.",
    image: "/tarotCards/p02.jpg",
  },
  {
    id: 66,
    name: "Three of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Takım çalışmasının, ustalığın ve işbirliğinin meyvelerini topladığınız bir süreçtesiniz. Başkalarıyla ortaklaşa yürüttüğünüz bir projede yetenekleriniz takdir görüyor ve saygınlık kazanıyorsunuz. Çıraklıktan ustalığa geçiş yaptığınız bu dönemde, profesyonel gelişiminize odaklanmalısınız. Birlikten kuvvet doğar sözü tam olarak sizin şu anki durumunuzu özetliyor.",
    meaningReversed:
      "Ekip içindeki iletişimsizlik, işbirliği eksikliği ve kötü çalışma disiplini hedeflerinize ulaşmanızı engelliyor. Yeteneklerinizi yeterince sergileyemiyor veya yanlış kişilerle ortaklık yapıyorsunuz. Disiplinsiz tavırlar işlerinizin kalitesini düşürüyor ve itibarınızı zedeliyor olabilir. Kendi üzerinize düşen sorumlulukları ciddiyetle ele almalı ve takım ruhunu yeniden canlandırmalısınız.",
    image: "/tarotCards/p03.jpg",
  },
  {
    id: 67,
    name: "Four of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Maddi güvenliğinizi sağlamak için tutumlu davranıyor ve elinizdekileri korumaya odaklanıyorsunuz. Geleceğiniz için sağlam temeller kurmuş olmanın verdiği huzurla, sahiplenici bir tavır sergiliyorsunuz. Ancak bu durum sizi değişime kapalı kılıyorsa dikkatli olmalısınız. Güvende olma arzunuzun özgürlüğünüzü kısıtlamasına izin vermeden, dengeyi koruyun.",
    meaningReversed:
      "Açgözlülük, cimrilik veya değişim korkusu nedeniyle hayatınızda bir tıkanıklık yaşıyor olabilirsiniz. Maddi şeylere o kadar çok tutunuyorsunuz ki, hayatın size sunacağı yeni enerjilere kapınızı kapatmışsınız. Akışa direnç göstermek ve bırakamamak sizi hem maddi hem de ruhsal olarak yoracaktır. Paylaşmanın ve esnek olmanın bereketini keşfetmeniz gerekiyor.",
    image: "/tarotCards/p04.jpg",
  },
  {
    id: 68,
    name: "Five of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Maddi anlamda ciddi bir zorluk, kayıp veya bir topluluktan dışlanmışlık hissi yaşıyor olabilirsiniz. Yardım istemekten çekindiğiniz için sıkıntılarınızı tek başınıza omuzlamaya çalışıyorsunuz. Aslında ışık ve yardım çok yakınınızda; sadece gözünüzü karamsarlıktan kaldırıp çevrenize bakmalısınız. Bu zorlu süreç, manevi gücünüzü ve dayanıklılığınızı test eden geçici bir evredir.",
    meaningReversed:
      "Maddi zorluklar yavaş yavaş geride kalıyor, durumunuzun düzelmeye başladığı umut dolu bir sürece giriyorsunuz. Kayıplarınızı telafi edecek fırsatlar kapınızı çalarken, iyileşme enerjisi sizi sarmalıyor. Artık o karlı fırtınanın içinden çıktınız ve sıcak bir yuvaya doğru ilerliyorsunuz. Sabrınızın meyvelerini toplama zamanı geliyor, pes etmeyin.",
    image: "/tarotCards/p05.jpg",
  },
  {
    id: 69,
    name: "Six of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Cömertlik, paylaşım ve dengeli bir alışveriş sürecindesiniz; hem yardım alabilir hem de verebilirsiniz. Maddi imkanlarınızı sevdiklerinizle paylaşmanın getirdiği manevi tatmini yaşıyorsunuz. Adaletli dağıtım ve merhametle hareket etmeniz çevrenizde büyük bir saygı uyandıracaktır. Evrenin bolluğuna olan inancınızla, ihtiyacı olanlara el uzatmanın tam zamanı.",
    meaningReversed:
      "Maddi ilişkilerinizde bir eşitsizlik, borç yükü veya bencillik hakim olabilir. Yardım ettiğiniz kişilerin bunu suiistimal etmesi veya sizin birine aşırı borçlanmanız huzurunuzu bozabilir. Sahte bir cömertlik maskesi takıyor veya güç oyunları peşinde koşuyor olabilirsiniz. Paylaşırken samimiyetinizi sorgulamalı ve finansal sınırlarınızı korumalısınız.",
    image: "/tarotCards/p06.jpg",
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Büyük bir sabırla ektiğiniz tohumların hasat zamanını bekliyorsunuz; meyveleri toplamak için henüz biraz zaman var. Uzun vadeli yatırımlarınızın ve emeklerinizin karşılığını almak üzere olduğunuzu bilerek sükunetinizi koruyun. Şimdiye kadar yaptıklarınızı gözden geçirmek ve doğru yolda olup olmadığınızı analiz etmek için uygun bir zaman. Sabır başarının anahtarıdır.",
    meaningReversed:
      "Çabalarınızın karşılığını alamadığınızı düşünerek sabırsızlık gösteriyor ve hayal kırıklığına uğruyorsunuz. Emeklerinizin boşa gittiği hissiyle işlerinizi yarıda bırakmak veya yanlış yönlere sapmak isteyebilirsiniz. Vizyon eksikliği nedeniyle uzun vadeli planlar yapmak yerine anlık kazançlar peşinde koşuyor olabilirsiniz. Odaklanmanızı korumalı ve rotanızı tekrar belirlemelisiniz.",
    image: "/tarotCards/p07.jpg",
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Çalışkanlığınızın, gelişiminizin ve zanaatınızdaki ustalığınızın ön planda olduğu bir dönemdesiniz. Detaylara odaklanarak, kendinizi işinize adayarak büyük bir ilerleme kaydediyorsunuz. Yeni beceriler öğrenmek ve kendinizi geliştirmek için harika bir süreçtesiniz. Her bir tılsımı özenle işlerken, geleceğinizi kendi ellerinizle ilmek ilmek inşa ediyorsunuz.",
    meaningReversed:
      "Tembellik, kalitesiz iş yapma ve odaksızlık nedeniyle yerinizde sayıyor olabilirsiniz. İşinizden sıkılmış veya kendinizi geliştirmek için gerekli olan motivasyonu kaybetmiş hissediyorsunuz. Detayları göz ardı etmek büyük hatalara yol açabilir ve itibarınızı sarsabilir. İlginizi çeken bir alana yönelmeli ve işinizi sadece 'yapmak' için değil, 'başarmak' için yapmalısınız.",
    image: "/tarotCards/p08.jpg",
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Maddi bağımsızlığınızı elde etmiş, lüksün ve konforun tadını çıkaran başarılı bir figürsünüz. Kendi ayaklarınız üzerinde dimdik dururken, hayatın sunduğu tüm güzellikleri hak ettiğinizi biliyorsunuz. Disiplinli çalışmalarınızın sonucunda ulaştığınız bu bolluk dönemi sizi oldukça özgüvenli kılıyor. Doğayla ve güzelliklerle iç içe olmanın keyfini sürün.",
    meaningReversed:
      "Finansal olarak riskli kararlar alıyor veya gösteriş düşkünlüğü nedeniyle bütçenizi aşıyorsunuz. Maddi başarınızın getirdiği konforu korumakta zorlanıyor ve kendinizi yetersiz hissediyor olabilirsiniz. Bağımsızlığınızın tehlikeye girdiğini veya sahte bir zenginlik maskesi taktığınızı fark etmelisiniz. Temellere geri dönmeli ve disiplininizi yeniden kazanmalısınız.",
    image: "/tarotCards/p09.jpg",
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Maddi zenginliğin, ailevi başarıların ve kalıcı bir mirasın simgesidir; tam bir refah içindesiniz. Uzun vadeli hedeflerinize ulaştınız, şimdi bu bolluğu sevdiklerinizle paylaşma vaktidir. Aile bağlarınızın güçlendiği, geleneklerinize sahip çıktığınız ve geleceğe sağlam bir temel bıraktığınız bir süreç. Başarılarınız sadece sizin değil, nesiller boyu sürecek bir etkiye sahip.",
    meaningReversed:
      "Maddi kayıplar, miras kavgaları veya aile içi finansal anlaşmazlıklar huzurunuzu bozabilir. Kurduğunuz o sağlam temeller sarsılıyor olabilir ve kendinizi maddi bir çıkmazda hissedebilirsiniz. Geleneklerin dışına çıkmak istemeniz aile büyükleriyle çatışmanıza neden olabilir. Paranın ve başarının her şey olmadığını hatırlamalı, manevi bağlara odaklanmalısınız.",
    image: "/tarotCards/p10.jpg",
  },
  {
    id: 74,
    name: "Page of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Yeni finansal hedeflere odaklandığınız, eğitim hayatınızın veya iş hayatınızın canlandığı bir dönem. Hırslı ve öğrenmeye açık yapınızla somut başarılar elde etmek için kararlılıkla çalışıyorsunuz. Karşınıza çıkacak yeni bir iş teklifi veya yatırım fırsatı gelecek vaat ediyor. Pratik adımlar atarak hayallerinizi gerçeğe dönüştürecek o ilk tohumu atıyorsunuz.",
    meaningReversed:
      "İlerleme eksikliği, tembellik ve plansızlık nedeniyle hedeflerinizden uzaklaşıyor olabilirsiniz. Elinize geçen fırsatları değerlendirmek için gerekli olan o sıkı çalışmayı yapmaktan kaçınıyorsunuz. Hayal dünyasında kurduğunuz maddi planlar gerçeklerle uyuşmuyor ve bu sizi demoralize ediyor. Odaklanmanızı geri kazanmalı ve disiplinli bir şekilde adım atmalısınız.",
    image: "/tarotCards/p11.jpg",
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Sorumluluk sahibi, güvenilir ve son derece muhafazakar bir tavırla hedeflerinize ağır ama emin adımlarla ilerliyorsunuz. Rutinlerinize sadık kalarak, her işinizi büyük bir titizlikle tamamlıyorsunuz. Sabrınız ve çalışkanlığınız en büyük hazinenizdir; asla kısa yollara sapmıyorsunuz. Sadakatiniz ve sağlam karakteriniz çevrenizdeki herkese güven veriyor.",
    meaningReversed:
      "Sıkıcı bir rutin içinde hapsolmuş, yaratıcılığınızı ve heyecanınızı kaybetmiş hissedebilirsiniz. Aşırı inatçılığınız ve değişime direnç göstermeniz fırsatları kaçırmanıza neden oluyor. Durgunluk ve risk almaktan duyduğunuz korku nedeniyle yerinizde sayıyor olmanız muhtemeldir. Biraz esneklik kazanmalı ve hayatın rutinine küçük heyecanlar katmayı denemelisiniz.",
    image: "/tarotCards/p12.jpg",
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Pratik zekanız, cömertliğiniz ve sıcak ev hayatınızla çevrenizdeki her şeyi güzelleştiriyorsunuz. Hem kariyerde başarılı hem de ev hayatında dengeli bir profil çizerek hayranlık uyandırıyorsunuz. Maddi kaynaklarınızı akıllıca yönetirken, sevdiklerinize şefkat dolu bir liman oluyorsunuz. Doğurgan ve besleyici enerjinizle hayatınıza bolluk çekiyorsunuz.",
    meaningReversed:
      "İş ve özel hayatınız arasındaki denge bozulmuş olabilir, bu da sizi aşırı kaygılı ve huzursuz kılıyor. Kıskançlık krizleri veya maddi dünyaya aşırı bağımlılık ilişkilerinize zarar verebilir. Kendinizi ihmal ediyor ve başkalarına yetişmeye çalışırken ruhsal olarak tükeniyorsunuz. Kendi değerinizi maddi varlıklarınızla ölçmeyi bırakmalı ve iç huzurunuza dönmelisiniz.",
    image: "/tarotCards/p13.jpg",
  },
  {
    id: 77,
    name: "King of Pentacles",
    arcana: "Minor",
    meaningUpright:
      "Maddi dünyanın efendisi olarak büyük bir finansal başarıya ve otoriteye sahipsiniz. Girişimci ruhunuz, güven veren duruşunuz ve zenginliğinizle çevrenize ilham veriyorsunuz. Sabırla inşa ettiğiniz imparatorluğunuzun tadını çıkarma ve mirasını koruma vaktindesiniz. Başarıya giden yolda sağlam ve akılcı kararlar alarak zirvede kalmaya devam ediyorsunuz.",
    meaningReversed:
      "Açgözlülük, yolsuzluk veya aşırı inatçılık nedeniyle itibarınızı ve maddi gücünüzü tehlikeye atıyor olabilirsiniz. Sadece paraya odaklanmış olmanız manevi değerlerinizi kaybetmenize neden olmuş olabilir. Katı ve kontrolcü tavırlarınız çevrenizdeki insanları sizden soğutuyor olabilir. Başarıya ulaşırken ahlaki değerlerinizi koruduğunuzdan emin olmalı ve esnek kalmalısınız.",
    image: "/tarotCards/p14.jpg",
  },
];
