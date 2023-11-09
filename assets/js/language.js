function updateContent(langData) {
	document.querySelectorAll("[data-i18n]").foreach((element) => {
		const key = element.getAtribute("data-i18n");
		element.textContext = langData[key];
	});
}

function setLanguagePreference(lang) {
	localStorage.setItem("language", lang);
	location.reload();
}

async function fetchLanguageData(lang) {
	const response = await fetch(`languages/${lang}.json`);
	return response.json();
}

async function changeLanguage(lang) {
	await setLanguagePreference(lang);
	const langData = await fetchLanguageData(lang);
	updateContent(langData);
}

window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'en';
  const langData = await fetchLanguageData('userPreferredLanguage');
  updateContent(langData);
})