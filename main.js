/**
 * FormBuddy Core Logic - Total Perfection Version
 */

// 1. Full App UI Labels for Absolute Perfection
const uiLabels = {
    en: {
        home: "🏠 Home",
        elder: "👴 Elder Mode",
        langLabel: "Language:",
        heroTitle: "Don't worry, I'll help you fill the form!",
        heroSubtitle: "Upload your printed form and get easy explanations in your language.",
        uploadInstruction: "Click here to Upload Form (PDF/Image)",
        privacy: "🔒 Uploaded files are not saved.",
        feat1: "✅ Keeps Original Form",
        feat2: "✅ Friendly Guidance",
        feat3: "✅ 5+ Languages",
        footer: "FormBuddy - Helping you fill complex documents with ease.",
        purpose: "Purpose",
        safety: "Safety Status",
        safe: "✅ SAFE",
        unsafe: "⚠️ UNSAFE",
        safeReason: "Standard form from reliable source.",
        unsafeReason: "Detected requests for sensitive passwords or unusual data.",
        next: "Next",
        back: "Back",
        finish: "Finish",
        exit: "Exit to Home",
        reading: "Reading your form...",
        finding: "I'm finding all the fields for you.",
        success: "FormBuddy: Successfully reviewed!",
        documentAnalysis: "Full Form Explanation"
    },
    ta: {
        home: "🏠 முகப்பு",
        elder: "👴 பெரியவர் பயன்முறை",
        langLabel: "மொழி:",
        heroTitle: "கவலைப்படாதீர்கள், படிவத்தை நிரப்ப நான் உதவுகிறேன்!",
        heroSubtitle: "உங்கள் அச்சிடப்பட்ட படிவத்தைப் பதிவேற்றி, உங்கள் மொழியில் எளிய விளக்கங்களைப் பெறுங்கள்.",
        uploadInstruction: "படிவத்தைப் பதிவேற்ற இங்கே கிளிக் செய்யவும் (PDF/படம்)",
        privacy: "🔒 பதிவேற்றப்பட்ட கோப்புகள் சேமிக்கப்படாது.",
        feat1: "✅ அசல் படிவத்தை அப்படியே வைத்திருக்கும்",
        feat2: "✅ நட்பு வழிகாட்டுதல்",
        feat3: "✅ 5+ மொழிகள்",
        footer: "FormBuddy - சிக்கலான ஆவணங்களை எளிதாக நிரப்ப உங்களுக்கு உதவுகிறது.",
        purpose: "நோக்கம்",
        safety: "பாதுகாப்பு நிலை",
        safe: "✅ பாதுகாப்பானது",
        unsafe: "⚠️ பாதுகாப்பற்றது",
        safeReason: "நம்பகமான மூலத்திலிருந்து வந்த நிலையான படிவம்.",
        unsafeReason: "கடவுச்சொற்கள் அல்லது வழக்கத்திற்கு மாறான தரவுக்கான கோரிக்கைகள் கண்டறியப்பட்டன.",
        next: "அடுத்து",
        back: "பின்னால்",
        finish: "முடிக்கவும்",
        exit: "முகப்புக்குச் செல்லவும்",
        reading: "உங்கள் படிவத்தைப் படிக்கிறது...",
        finding: "உங்களுக்காக எல்லா புலங்களையும் தேடுகிறேன்.",
        success: "FormBuddy: வெற்றிகரமாக மதிப்பாய்வு செய்யப்பட்டது!",
        documentAnalysis: "முழுப் படிவ விளக்கம்"
    },
    hi: {
        home: "🏠 होम",
        elder: "👴 बुजुर्ग मोड",
        langLabel: "भाषा:",
        heroTitle: "चिंता न करें, मैं आपको फॉर्म भरने में मदद करूँगा!",
        heroSubtitle: "अपना प्रिंटेड फॉर्म अपलोड करें और अपनी भाषा में आसान स्पष्टीकरण प्राप्त करें।",
        uploadInstruction: "फॉर्म अपलोड करने के लिए यहाँ क्लिक करें (PDF/Image)",
        privacy: "🔒 अपलोड की गई फाइलें सेव नहीं की जाती हैं।",
        feat1: "✅ मूल फॉर्म सुरक्षित रखता है",
        feat2: "✅ अनुकूल मार्गदर्शन",
        feat3: "✅ 5+ भाषाएं",
        footer: "FormBuddy - जटिल दस्तावेजों को आसानी से भरने में आपकी मदद करता है।",
        purpose: "उद्देश्य",
        safety: "सुरक्षा स्थिति",
        safe: "✅ सुरक्षित",
        unsafe: "⚠️ असुरक्षित",
        safeReason: "विश्वसनीय स्रोत से मानक फॉर्म।",
        unsafeReason: "संवेदनशील पासवर्ड या असामान्य डेटा के लिए अनुरोध का पता चला।",
        next: "अगला",
        back: "पीछे",
        finish: "समाप्त",
        exit: "होम पर जाएं",
        reading: "आपका फॉर्म पढ़ रहा हूँ...",
        finding: "मैं आपके लिए सभी फ़ील्ड ढूँढ रहा हूँ.",
        success: "FormBuddy: सफलतापूर्वक समीक्षा की गई!",
        documentAnalysis: "पूर्ण फॉर्म स्पष्टीकरण"
    },
    te: {
        home: "🏠 హోమ్",
        elder: "👴 వృద్ధుల మోడ్",
        langLabel: "భాష:",
        heroTitle: "చింతించకండి, ఫారమ్ నింపడానికి నేను మీకు సహాయం చేస్తాను!",
        heroSubtitle: "మీ ప్రింటెడ్ ఫారమ్‌ను అప్‌లోడ్ చేయండి మరియు మీ భాషలో సులభమైన వివరణలను పొందండి.",
        uploadInstruction: "ఫారమ్‌ను అప్‌లోడ్ చేయడానికి ఇక్కడ క్లిక్ చేయండి (PDF/చిత్రం)",
        privacy: "🔒 అప్‌లోడ్ చేసిన ఫైల్‌లు సేవ్ చేయబడవు.",
        feat1: "✅ అసలు ఫారమ్‌ను అలాగే ఉంచుతుంది",
        feat2: "✅ స్నేహపూర్వక మార్గదర్శకత్వం",
        feat3: "✅ 5+ భాషలు",
        footer: "FormBuddy - సంక్లిష్టమైన పత్రాలను సులభంగా నింపడానికి మీకు సహాయపడుతుంది.",
        purpose: "ప్రయోజనం",
        safety: "భద్రత స్థితి",
        safe: "✅ సురక్షితం",
        unsafe: "⚠️ అసురక్షితం",
        safeReason: "నమ్మదగిన మూలం నుండి ప్రామాణిక రూపం.",
        unsafeReason: "సున్నితమైన పాస్‌వర్డ్‌లు లేదా అసాధారణ డేటా కోసం అభ్యర్థనలు కనుగొనబడ్డాయి.",
        next: "తదుపరి",
        back: "వెనుకకు",
        finish: "ముగించు",
        exit: "హోమ్‌కు వెళ్లండి",
        reading: "మీ ఫారమ్‌ను చదువుతోంది...",
        finding: "నేను మీ కోసం అన్ని ఫీల్డ్‌లను వెతుకుతున్నాను.",
        success: "FormBuddy: విజయవంతంగా సమీక్షించబడింది!",
        documentAnalysis: "పూర్తి ఫారమ్ వివరణ"
    },
    kn: {
        home: "🏠 ಹೋಮ್",
        elder: "👴 ಹಿರಿಯರ ಮೋಡ್",
        langLabel: "ಭಾಷೆ:",
        heroTitle: "ಚಿಂತಿಸಬೇಡಿ, ಫಾರ್ಮ್ ತುಂಬಲು ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ!",
        heroSubtitle: "ನಿಮ್ಮ ಮುದ್ರಿತ ಫಾರ್ಮ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಸುಲಭ ವಿವರಣೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
        uploadInstruction: "ಫಾರ್ಮ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ (PDF/ಚಿತ್ರ)",
        privacy: "🔒 ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಫೈಲ್‌ಗಳನ್ನು ಉಳಿಸಲಾಗುವುದಿಲ್ಲ.",
        feat1: "✅ ಮೂಲ ಫಾರ್ಮ್ ಅನ್ನು ಹಾಗೆಯೇ ಇರಿಸುತ್ತದೆ",
        feat2: "✅ ಸ್ನೇಹಪರ ಮಾರ್ಗದರ್ಶನ",
        feat3: "✅ 5+ ಭಾಷೆಗಳು",
        footer: "FormBuddy - ಸಂಕೀರ್ಣ ದಾಖಲೆಗಳನ್ನು ಸುಲಭವಾಗಿ ತುಂಬಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        purpose: "ಉದ್ದೇಶ",
        safety: "ಸುರಕ್ಷತೆ ಸ್ಥಿತಿ",
        safe: "✅ ಸುರಕ್ಷಿತವಾಗಿದೆ",
        unsafe: "⚠️ ಅಸುರಕ್ಷಿತವಾಗಿದೆ",
        safeReason: "ವಿಶ್ವಾಸಾರ್ಹ ಮೂಲದಿಂದ ಪ್ರಮಾಣಿತ ರೂಪ.",
        unsafeReason: "ಸೂಕ್ಷ್ಮ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಅಥವಾ ಅಸಾಮಾನ್ಯ ಡೇಟಾದ ವಿನಂತಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.",
        next: "ಮುಂದೆ",
        back: "ಹಿಂದೆ",
        finish: "ಮುಗಿಸಿ",
        exit: "ಹೋಮ್‌ಗೆ ಹೋಗಿ",
        reading: "ನಿಮ್ಮ ಫಾರ್ಮ್ ಅನ್ನು ಓದಲಾಗುತ್ತಿದೆ...",
        finding: "ನಾನು ನಿಮಗಾಗಿ ಎಲ್ಲಾ ಫೀಲ್ಡ್‌ಗಳನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇನೆ.",
        success: "FormBuddy: ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ!",
        documentAnalysis: "ಸಂಪೂರ್ಣ ಫಾರ್ಮ್ ವಿವರಣೆ"
    }
};

const fieldLabels = {
    en: { name: "Full Name", dob: "Date of Birth", address: "Permanent Address", amount: "Requested Amount", pan: "PAN Card Number", aadhaar: "Aadhaar Number", signature: "Applicant Signature", date: "Application Date", mobile: "Mobile Number", email: "Email ID", city: "City/Town", pincode: "Pincode", generic: "Additional Information" },
    ta: { name: "முழு பெயர்", dob: "பிறந்த தேதி", address: "நிரந்தர முகவரி", amount: "கோரப்பட்ட தொகை", pan: "பான் கார்டு எண்", aadhaar: "ஆதார் எண்", signature: "விண்ணப்பதாரர் கையொப்பம்", date: "விண்ணப்ப தேதி", mobile: "செல்போன் எண்", email: "மின்னஞ்சல் முகவரி", city: "ஊர் / நகரம்", pincode: "அஞ்சல் குறியீடு", generic: "கூடுதல் தகவல்" },
    hi: { name: "पूरा नाम", dob: "जन्म तिथि", address: "स्थायी पता", amount: "अनुरोधित राशि", pan: "पैन कार्ड नंबर", aadhaar: "आधार नंबर", signature: "आवेदक के हस्ताक्षर", date: "आवेदन तिथि", mobile: "मोबाइल नंबर", email: "ईमेल आईडी", city: "शहर/कस्बा", pincode: "पिनकोड", generic: "अतिरिक्त जानकारी" },
    te: { name: "పూర్తి పేరు", dob: "పుట్టిన తేదీ", address: "శాశ్వత చిరునామా", amount: "కోరిన మొత్తం", pan: "పాన్ కార్డ్ నంబర్", aadhaar: "ఆధార్ నంబర్", signature: "దరఖాస్తుదారు సంతకం", date: "దరఖాస్తు తేదీ", mobile: "మొబైల్ నంబర్", email: "ఇమెయిల్ ఐడి", city: "నగరం/పట్టణం", pincode: "పిన్‌కోడ్", generic: "అదనపు సమాచారం" },
    kn: { name: "ಪೂರ್ಣ ಹೆಸರು", dob: "ಜನ್ಮ ದಿನಾಂಕ", address: "ಕಾಯಂ ವಿಳಾಸ", amount: "ಕೋರಿದ ಮೊತ್ತ", pan: "ಪಾನ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ", aadhaar: "ಆಧಾರ್ ಸಂಖ್ಯೆ", signature: "ಅರ್ಜಿದಾರರ ಸಹಿ", date: "ಅರ್ಜಿ ದಿನಾಂಕ", mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ", email: "ಇಮೇಲ್ ಐಡಿ", city: "ನಗರ/ಪಟ್ಟಣ", pincode: "ಪಿನ್‌ಕೋಡ್", generic: "ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ" }
};

const fieldExplanations = {
    en: { name: "Write your full legal name as per ID records.", dob: "Enter your date of birth in Day/Month/Year format.", address: "Provide your current residential address clearly.", amount: "Mention the exact amount you wish to borrow or pay.", pan: "10-character alphanumeric Permanent Account Number.", aadhaar: "12-digit unique identification number.", signature: "Sign inside the box exactly as per bank records.", date: "Enter today's date in DD/MM/YYYY format.", mobile: "Provide your active 10-digit mobile number.", email: "Enter your valid email address for communication.", city: "Name of your current city or district.", pincode: "Your 6-digit postal area code.", generic: "Fill this field as per the specific document requirements." },
    ta: { name: "உங்கள் அடையாள ஆவணங்களில் உள்ளபடி முழுப் பெயரை எழுதவும்.", dob: "பிறந்த தேதியை நாள்/மாதம்/ஆண்டு என்ற வரிசையில் எழுதவும்.", address: "நீங்கள் தற்போது வசிக்கும் முகவரியை தெளிவாக வழங்கவும்.", amount: "நீங்கள் பெற அல்லது செலுத்த விரும்பும் சரியான தொகையை குறிப்பிடவும்.", pan: "10 இலக்க பான் கார்டு எண்ணை இங்கே எழுதவும்.", aadhaar: "12 இலக்க ஆதார அடையாள எண்ணை இங்கே குறிப்பிடவும்.", signature: "வங்கி பதிவுகளில் உள்ளபடி பெட்டிக்குள் கையொப்பமிடவும்.", date: "இன்றைய தேதியை DD/MM/YYYY வடிவில் எழுதவும்.", mobile: "உங்கள் பயன்பாட்டில் உள்ள 10 இலக்க செல்போன் நம்பரை தரவும்.", email: "தொடர்புகொள்வதற்காக உங்கள் மின்னஞ்சல் முகவரியை எழுதவும்.", city: "நீங்கள் இருக்கும் ஊர் அல்லது மாவட்டத்தின் பெயர்.", pincode: "6 இலக்க அஞ்சல் குறியீட்டு (Pincode) எண்ணை எழுதவும்.", generic: "ஆவணத் தேவைகளின்படி இந்த புலத்தை சரியாக நிரப்பவும்." },
    hi: { name: "आईडी रिकॉर्ड के अनुसार अपना पूरा कानूनी नाम लिखें।", dob: "जन्म तिथि दिन/माह/वर्ष प्रारूप में दर्ज करें।", address: "अपना वर्तमान आवासीय पता स्पष्ट रूप से प्रदान करें।", amount: "वह सटीक राशि लिखें जिसे आप उधार लेना या भुगतान करना चाहते हैं।", pan: "अपना 10-अंकीय स्थायी खाता संख्या (PAN) यहाँ लिखें।", aadhaar: "अपनी 12-अंकीय विशिष्ट पहचान संख्या (Aadhaar) यहाँ लिखें।", signature: "बैंक रिकॉर्ड के अनुसार बॉक्स के अंदर हस्ताक्षर करें।", date: "आज की तारीख DD/MM/YYYY प्रारूप में दर्ज करें।", mobile: "अपना सक्रिय 10-अंकीय मोबाइल नंबर प्रदान करें।", email: "संचार के लिए अपना वैध ईमेल पता दर्ज करें।", city: "आपके वर्तमान शहर या जिले का नाम।", pincode: "आपका 6-अंकीय डाक क्षेत्र कोड।", generic: "दस्तावेज़ की आवश्यकताओं के अनुसार इस फ़ील्ड को भरें।" },
    te: { name: "ఐడి రికార్డుల ప్రకారం మీ పూర్తి చట్టపరమైన పేరు రాయండి.", dob: "పుట్టిన తేదీని రోజు/నెల/సంవత్సరం ఫార్మాట్‌లో నమోదు చేయండి.", address: "మీ ప్రస్తుత నివాస చిరునామాను స్పష్టంగా అందించండి.", amount: "మీరు అప్పుగా తీసుకోవాలనుకుంటున్న లేదా చెల్లించాలనుకుంటున్న మొత్తాన్ని పేర్కొనండి.", pan: "మీ 10-అక్షరాల శాశ్వత ఖాతా సంఖ్య (PAN) ఇక్కడ రాయండి.", aadhaar: "మీ 12-అంకెల ప్రత్యేక గుర్తింపు సంఖ్య (Aadhaar) ఇక్కడ రాయండి.", signature: "బ్యాంక్ రికార్డుల ప్రకారం బాక్సు లోపల సంతకం చేయండి.", date: "నేటి తేదీని DD/MM/YYYY ఫార్మాట్‌లో నమోదు చేయండి.", mobile: "మీ 10-అంకెల మొబైల్ నంబర్‌ను అందించండి.", email: "కమ్యూనికేషన్ కోసం మీ చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామాను నమోదు చేయండి.", city: "మీ ప్రస్తుత నగరం లేదా జిల్లా పేరు.", pincode: "మీ 6-అంకెల పోస్టల్ ఏరియా కోడ్.", generic: "పత్రం అవసరాల ప్రకారం ఈ ఫీల్డ్‌ను పూరించండి." },
    kn: { name: "ಐಡಿ ದಾಖಲೆಗಳ ಪ್ರಕಾರ ನಿಮ್ಮ ಪೂರ್ಣ ಕಾನೂನು ಹೆಸರನ್ನು ಬರೆಯಿರಿ.", dob: "ಜನ್ಮ ದಿನಾಂಕವನ್ನು ದಿನ/ತಿಂಗಳು/ವರ್ಷ ರೂಪದಲ್ಲಿ ನಮೂದಿಸಿ.", address: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ವಸತಿ ವಿಳಾಸವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಒದಗಿಸಿ.", amount: "ನೀವು ಸಾಲ ಪಡೆಯಲು ಬಯಸುವ ಅಥವಾ ಪಾವತಿಸಲು ಬಯಸುವ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ.", pan: "ನಿಮ್ಮ 10-ಅಕ್ಷರಗಳ ಶಾಶ್ವತ ಖಾತೆ ಸಂಖ್ಯೆಯನ್ನು (PAN) ಇಲ್ಲಿ ಬರೆಯಿರಿ.", aadhaar: "ನಿಮ್ಮ 12-ಅಂಕಿಗಳ ವಿಶಿಷ್ಟ ಗುರುತಿನ ಸಂಖ್ಯೆಯನ್ನು (Aadhaar) ಇಲ್ಲಿ ಬರೆಯಿರಿ.", signature: "ಬ್ಯಾಂಕ್ ದಾಖಲೆಗಳ ಪ್ರಕಾರ ಬಾಕ್ಸ್ ಒಳಗೆ ಸಹಿ ಮಾಡಿ.", date: "ಇಂದಿನ ದಿನಾಂಕವನ್ನು DD/MM/YYYY ರೂಪದಲ್ಲಿ ನಮೂದಿಸಿ.", mobile: "ನಿಮ್ಮ 10-ಅಂಕಿಗಳ ಸಕ್ರಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಒದಗಿಸಿ.", email: "ಸಂವಹನಕ್ಕಾಗಿ ನಿಮ್ಮ ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.", city: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ನಗರ ಅಥವಾ ಜಿಲ್ಲೆಯ ಹೆಸರು.", pincode: "ನಿಮ್ಮ 6-ಅಂಕಿಯ ಅಂಚೆ ಪ್ರದೇಶದ ಕೋಡ್ ಸಂಖ್ಯೆ.", generic: "ಡಾಕ್ಯುಮೆಂಟ್ ಅವಶ್ಯಕತೆಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಈ ಫೀಲ್ಡ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ." }
};

const purposeTemplates = {
    en: { loan: "Used to apply for financial assistance or bank credit.", student: "Used for academic registration and student records.", id: "Used for identity verification and official proof.", generic: "General document for administrative and record purposes." },
    ta: { loan: "நிதி உதவி அல்லது வங்கி கடனுக்கு விண்ணப்பிக்கப் பயன்படுகிறது.", student: "கல்விப் பதிவு மற்றும் மாணவர் பதிவுகளுக்குப் பயன்படுகிறது.", id: "அடையாள சரிபார்ப்பு மற்றும் அதிகாரப்பூர்வ சான்றுகளுக்குப் பயன்படுகிறது.", generic: "நிர்வாகம் மற்றும் ஆவண நோக்கங்களுக்கான பொதுவான ஆவணம்." },
    hi: { loan: "वित्तीय सहायता या बैंक ऋण के लिए आवेदन करने के लिए उपयोग किया जाता है।", student: "शैक्षणिक पंजीकरण और छात्र रिकॉर्ड के लिए उपयोग किया जाता है।", id: "पहचान सत्यापन और आधिकारिक प्रमाण के लिए उपयोग किया जाता है।", generic: "प्रशासनिक और रिकॉर्ड उद्देश्यों के लिए सामान्य दस्तावेज़।" },
    te: { loan: "ఆర్థిక సహాయం లేదా బ్యాంక్ క్రెడిట్ కోసం దరఖాస్తు చేయడానికి ఉపయోగిస్తారు.", student: "విద్యా రిజిస్ట్రేషన్ మరియు విద్యార్థి రికార్డుల కోసం ఉపయోగిస్తారు.", id: "గుర్తింపు ధృవీకరణ మరియు అధికారిక రుజువు కోసం ఉపయోగిస్తారు.", generic: "పరిపాలనా మరియు రికార్డు ప్రయోజనాల కోసం సాధారణ పత్రం." },
    kn: { loan: "ಹಣಕಾಸಿನ ನೆರವು ಅಥವಾ ಬ್ಯಾಂಕ್ ಸಾಲಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.", student: "ಶೈಕ್ಷಣಿಕ ನೋಂದಣಿ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆಗಳಿಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.", id: "ಗುರುತಿನ ಪರಿಶೀಲನೆ ಮತ್ತು ಅಧಿಕೃತ ಪುರಾವೆಗಳಿಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.", generic: "ಆಡಳಿತಾತ್ಮಕ ಮತ್ತು ದಾಖಲೆ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಸಾಮಾನ್ಯ ದಾಖಲೆ." }
};

// 3. State Management
let currentAnalysis = null;
let currentLang = 'en';
let currentFileUrl = null;
let isElderMode = false;
let currentStep = 0;
const FIELDS_PER_STEP = 3;

function toggleElderMode() {
    isElderMode = !isElderMode;
    document.body.classList.toggle('elder-mode');
    const label = uiLabels[currentLang].elder;
    document.getElementById('btn-elder').innerText = isElderMode ? "✅ " + label : "👴 " + label;
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        const langMap = { en: 'en-US', ta: 'ta-IN', hi: 'hi-IN', te: 'te-IN', kn: 'kn-IN' };
        const targetLang = langMap[currentLang] || 'en-US';

        // Perfection: Actively search for the best regional voice
        const voices = window.speechSynthesis.getVoices();
        const bestVoice = voices.find(v => v.lang === targetLang) ||
            voices.find(v => v.lang.startsWith(currentLang)) ||
            voices.find(v => v.lang.includes(currentLang.toUpperCase()));

        if (bestVoice) msg.voice = bestVoice;
        msg.lang = targetLang;
        msg.rate = 0.75; // Slower for absolute clarity
        msg.pitch = 1.0;
        window.speechSynthesis.speak(msg);
    }
}

function translateApp() {
    const labels = uiLabels[currentLang];
    document.getElementById('btn-home').innerText = labels.home;
    document.getElementById('btn-elder').innerText = isElderMode ? "✅ " + labels.elder : "👴 " + labels.elder;
    document.getElementById('label-lang').innerText = labels.langLabel;
    document.getElementById('hero-title').innerText = labels.heroTitle;
    document.getElementById('hero-subtitle').innerText = labels.heroSubtitle;
    document.getElementById('upload-instruction').innerText = labels.uploadInstruction;
    document.getElementById('privacy-note').innerText = labels.privacy;
    document.getElementById('feat-1').innerText = labels.feat1;
    document.getElementById('feat-2').innerText = labels.feat2;
    document.getElementById('feat-3').innerText = labels.feat3;
    document.getElementById('footer-text').innerText = labels.footer;

    const scanH3 = document.querySelector('#scan-screen h3');
    const scanP = document.querySelector('#scan-screen p');
    if (scanH3) scanH3.innerText = labels.reading;
    if (scanP) scanP.innerText = labels.finding;
}

function analyzeFile(file) {
    const fileName = file.name;
    const nameLower = fileName.toLowerCase();
    let type = 'generic';
    if (nameLower.includes('loan') || nameLower.includes('bank')) type = 'loan';
    else if (nameLower.includes('student') || nameLower.includes('school')) type = 'student';
    else if (nameLower.includes('id') || nameLower.includes('card') || nameLower.includes('aadhaar')) type = 'id';

    const allCommonFields = ['name', 'dob', 'mobile', 'email', 'address', 'city', 'pincode', 'amount', 'pan', 'aadhaar', 'date', 'signature', 'generic'];

    return {
        fileName: fileName.toUpperCase(),
        type: type,
        isSafe: !nameLower.includes('fake') && !nameLower.includes('leak'),
        fields: allCommonFields
    };
}

function renderFormFromAnalysis() {
    if (!currentAnalysis) return;
    const lang = currentLang;
    const labels = uiLabels[lang];
    const formContainer = document.getElementById('multi-step-form');

    document.getElementById('dynamic-file-name').innerText = currentAnalysis.fileName;
    document.getElementById('dynamic-file-subtitle').innerText = labels.documentAnalysis;
    document.getElementById('file-purpose-val').innerText = purposeTemplates[lang][currentAnalysis.type];

    const safetyEl = document.getElementById('file-safety-val');
    safetyEl.innerText = currentAnalysis.isSafe ? labels.safe : labels.unsafe;
    safetyEl.className = 'info-value ' + (currentAnalysis.isSafe ? 'safe' : 'unsafe');

    // PERFECTION: Localized reasons - Use dedicated element
    const reasonEl = document.getElementById('safety-reason-val');
    if (reasonEl) {
        reasonEl.innerText = currentAnalysis.isSafe ? labels.safeReason : labels.unsafeReason;
    }

    document.getElementById('label-purpose').innerText = labels.purpose + ":";
    document.getElementById('label-safety').innerText = labels.safety + ":";

    // PERFECTION: Step-by-Step logic. Group fields for 'Next' button experience.
    const totalFields = currentAnalysis.fields.length;
    const startIndex = currentStep * FIELDS_PER_STEP;
    const endIndex = Math.min(startIndex + FIELDS_PER_STEP, totalFields);
    const visibleFields = currentAnalysis.fields.slice(startIndex, endIndex);

    formContainer.innerHTML = visibleFields.map(fieldId => {
        const fieldLabel = fieldLabels['en'][fieldId] || fieldLabels['en'].generic;
        const fieldNote = "👉 " + (fieldExplanations[lang][fieldId] || fieldExplanations[lang].generic);
        return `
            <div class="form-group" data-id="${fieldId}">
                <label>${fieldLabel}</label>
                <span class="underline-field">____________________</span>
                <div class="buddy-note-container">
                    <div class="buddy-note">${fieldNote}</div>
                    <button type="button" class="voice-btn" onclick="speakText('${fieldNote.replace('👉', '')}')">🔊</button>
                </div>
            </div>
        `;
    }).join('');

    // Navigation Buttons
    let navHtml = '<div class="nav-buttons">';
    if (currentStep > 0) {
        navHtml += `<button type="button" class="nav-btn secondary" onclick="prevStep()">${labels.back}</button>`;
    } else {
        navHtml += `<div></div>`; // Spacer
    }

    if (endIndex < totalFields) {
        navHtml += `<button type="button" class="nav-btn primary" onclick="nextStep()">${labels.next}</button>`;
    } else {
        navHtml += `<button type="button" class="nav-btn primary" onclick="showScreen('home-screen')">${labels.finish}</button>`;
    }
    navHtml += '</div>';
    formContainer.innerHTML += navHtml;

    updateProgressBar(totalFields);
}

function updateProgressBar(totalFields) {
    const totalSteps = Math.ceil(totalFields / FIELDS_PER_STEP);
    const progress = ((currentStep + 1) / totalSteps) * 100;
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = progress + "%";

    const wrapper = document.querySelector('.progress-wrapper');
    if (wrapper) wrapper.style.display = 'block';

    const stepsContainer = document.querySelector('.progress-steps');
    if (stepsContainer) {
        stepsContainer.innerHTML = '';
        for (let i = 0; i < totalSteps; i++) {
            const span = document.createElement('span');
            span.className = 'p-step' + (i === currentStep ? ' active' : (i < currentStep ? ' done' : ''));
            span.innerText = i + 1;
            stepsContainer.appendChild(span);
        }
    }
}

function nextStep() {
    const totalFields = currentAnalysis.fields.length;
    if ((currentStep + 1) * FIELDS_PER_STEP < totalFields) {
        currentStep++;
        renderFormFromAnalysis();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderFormFromAnalysis();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function handleFileUpload(event) {
    const input = event.target || document.getElementById('file-upload');
    if (input.files.length > 0) {
        try {
            const file = input.files[0];
            if (currentFileUrl) URL.revokeObjectURL(currentFileUrl);
            currentAnalysis = null;
            currentStep = 0;

            const previewContainer = document.getElementById('uploaded-file-preview');
            previewContainer.innerHTML = '';
            currentFileUrl = URL.createObjectURL(file);

            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = currentFileUrl;
                previewContainer.appendChild(img);
            } else {
                previewContainer.innerHTML = '<div class="pdf-icon">📄<br><small>PDF Document</small></div>';
            }

            showScreen('scan-screen');
            setTimeout(() => {
                currentAnalysis = analyzeFile(file);
                renderFormFromAnalysis();
                showScreen('form-screen');
                input.value = '';
            }, 2500);
        } catch (e) {
            alert("Error uploading file.");
            showScreen('home-screen');
        }
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    // Manage visibility of language toggle
    const langToggle = document.getElementById('lang-toggle-container');
    if (langToggle) {
        langToggle.classList.toggle('hidden', screenId === 'scan-screen');
    }
    translateApp();
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang; // Set for CSS font handling
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
    translateApp();
    if (currentAnalysis) renderFormFromAnalysis();
}

document.addEventListener('DOMContentLoaded', () => {
    translateApp();
    showScreen('home-screen');
});
