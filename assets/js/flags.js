const flags = {
  emoji: '🇦🇨|🇦🇩|🇦🇪|🇦🇫|🇦🇬|🇦🇮|🇦🇱|🇦🇲|🇦🇴|🇦🇶|🇦🇷|🇦🇸|🇦🇹|🇦🇺|🇦🇼|🇦🇽|🇦🇿|🇧🇦|🇧🇧|🇧🇩|🇧🇪|🇧🇫|🇧🇬|🇧🇭|🇧🇮|🇧🇯|🇧🇱|🇧🇲|🇧🇳|🇧🇴|🇧🇶|🇧🇷|🇧🇸|🇧🇹|🇧🇻|🇧🇼|🇧🇾|🇧🇿|🇨🇦|🇨🇨|🇨🇩|🇨🇫|🇨🇬|🇨🇭|🇨🇮|🇨🇰|🇨🇱|🇨🇲|🇨🇳|🇨🇴|🇨🇵|🇨🇷|🇨🇺|🇨🇻|🇨🇼|🇨🇽|🇨🇾|🇨🇿|🇩🇪|🇩🇬|🇩🇯|🇩🇰|🇩🇲|🇩🇴|🇩🇿|🇪🇦|🇪🇨|🇪🇪|🇪🇬|🇪🇭|🇪🇷|🇪🇸|🇪🇹|🇪🇺|🇫🇮|🇫🇯|🇫🇰|🇫🇲|🇫🇴|🇫🇷|🇬🇦|🇬🇧|🇬🇩|🇬🇪|🇬🇫|🇬🇬|🇬🇭|🇬🇮|🇬🇱|🇬🇲|🇬🇳|🇬🇵|🇬🇶|🇬🇷|🇬🇸|🇬🇹|🇬🇺|🇬🇼|🇬🇾|🇭🇰|🇭🇲|🇭🇳|🇭🇷|🇭🇹|🇭🇺|🇮🇨|🇮🇩|🇮🇪|🇮🇱|🇮🇲|🇮🇳|🇮🇴|🇮🇶|🇮🇷|🇮🇸|🇮🇹|🇯🇪|🇯🇲|🇯🇴|🇯🇵|🇰🇪|🇰🇬|🇰🇭|🇰🇮|🇰🇲|🇰🇳|🇰🇵|🇰🇷|🇰🇼|🇰🇾|🇰🇿|🇱🇦|🇱🇧|🇱🇨|🇱🇮|🇱🇰|🇱🇷|🇱🇸|🇱🇹|🇱🇺|🇱🇻|🇱🇾|🇲🇦|🇲🇨|🇲🇩|🇲🇪|🇲🇫|🇲🇬|🇲🇭|🇲🇰|🇲🇱|🇲🇲|🇲🇳|🇲🇴|🇲🇵|🇲🇶|🇲🇷|🇲🇸|🇲🇹|🇲🇺|🇲🇻|🇲🇼|🇲🇽|🇲🇾|🇲🇿|🇳🇦|🇳🇨|🇳🇪|🇳🇫|🇳🇬|🇳🇮|🇳🇱|🇳🇴|🇳🇵|🇳🇷|🇳🇺|🇳🇿|🇴🇲|🇵🇦|🇵🇪|🇵🇫|🇵🇬|🇵🇭|🇵🇰|🇵🇱|🇵🇲|🇵🇳|🇵🇷|🇵🇸|🇵🇹|🇵🇼|🇵🇾|🇶🇦|🇷🇪|🇷🇴|🇷🇸|🇷🇺|🇷🇼|🇸🇦|🇸🇧|🇸🇨|🇸🇩|🇸🇪|🇸🇬|🇸🇭|🇸🇮|🇸🇯|🇸🇰|🇸🇱|🇸🇲|🇸🇳|🇸🇴|🇸🇷|🇸🇸|🇸🇹|🇸🇻|🇸🇽|🇸🇾|🇸🇿|🇹🇦|🇹🇨|🇹🇩|🇹🇫|🇹🇬|🇹🇭|🇹🇯|🇹🇰|🇹🇱|🇹🇲|🇹🇳|🇹🇴|🇹🇷|🇹🇹|🇹🇻|🇹🇼|🇹🇿|🇺🇦|🇺🇬|🇺🇲|🇺🇳|🇺🇸|🇺🇾|🇺🇿|🇻🇦|🇻🇨|🇻🇪|🇻🇬|🇻🇮|🇻🇳|🇻🇺|🇼🇫|🇼🇸|🇽🇰|🇾🇪|🇾🇹|🇿🇦|🇿🇲|🇿🇼|🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿|🏴󠁵󠁳󠁴󠁸󠁿'.split('|'),
  name: {
    id: "Pulau Ascension|Andorra|Uni Emirat Arab|Afganistan|Antigua & Barbuda|Anguilla|Albania|Armenia|Angola|Antartika|Argentina|Samoa Amerika|Austria|Australia|Aruba|Pulau Aland|Azerbaijan|Bosnia & Herzegovina|Barbados|Bangladesh|Belgia|Burkina Faso|Bulgaria|Bahrain|Burundi|Benin|St. Barthélemy|Bermuda|Brunei Darussalam|Bolivia|Karibia Belanda|Brazil|Bahama|Bhutan|Pulau Bouvet|Botswana|Belarusia|Belize|Kanada|Kepulauan Cocos (Keeling)|Kongo - Kinshasa|Republik Afrika Tengah|Kongo - Brazzaville|Swiss|Côte d'Ivoire|Kepulauan Cook|Chile|Kamerun|Cina|Kolumbia|Pulau Clipperton|Kosta Rika|Kuba|Tanjung Verde|Curacao|Pulau Natal|Siprus|Republik Ceko|Jerman|Diego Garcia|Djibouti|Denmark|Dominika|Republik Dominika|Aljazair|Ceuta & Melilla|Ekuador|Estonia|Mesir|Sahara Barat|Eritrea|Spanyol|Etiopia|Uni Eropa|Finlandia|Fiji|Kepulauan Falkland|Mikronesia|Kepulauan Faroe|Perancis|Gabon|Britania Raya|Grenada|Georgia|Guyana Perancis|Guernsey|Ghana|Gibraltar|Tanah penggembalaan|Gambia|Guinea|Guadeloupe|Guinea ekuator|Yunani|Georgia Selatan & Kepulauan Sandwich Selatan|Guatemala|Guam|Guinea-Bissau|Guyana|Hong Kong SAR Cina|Kepulauan Heard & McDonald|Honduras|Kroasia|Haiti|Hungaria|Pulau Canary|Indonesia|Irlandia|Israel|Pulau manusia|India|Wilayah Samudra Hindia Britania|Irak|Iran|Islandia|Italia|Jersey|Jamaika|Yordania|Jepang|Kenya|Kirgistan|Kamboja|Kiribati|Komoro|St. Kitts & Nevis|Korea Utara|Korea Selatan|Kuwait|Pulau cayman|Kazakhstan|Laos|Libanon|St. Lucia|Liechtenstein|Srilanka|Liberia|Lesotho|Lithuania|Luksemburg|Latvia|Libya|Maroko|Monaco|Moldova|Montenegro|St. Martin|Madagaskar|Pulau Marshall|Makedonia Utara|Mali|Myanmar (Burma)|Mongolia|Macao Sar Cina|Kepulauan Mariana Utara|Martinik|Mauritania|Montserrat|Malta|Mauritius|Maladewa|Malawi|Mexico|Malaysia|Mozambik|Namibia|Kaledonia Baru|Niger|Pulau Norfolk|Nigeria|Nikaragua|Belanda|Norway|Nepal|Nauru|Niue|Selandia Baru|Oman|Panama|Peru|Polinesia Perancis|Papua Nugini|Filipina|Pakistan|Polandia|St. Pierre & Miquelon|Kepulauan Pitcairn|Puerto Rico|Wilayah Palestina|Portugal|Palau|Paraguay|Qatar|Reuni|Rumania|Serbia|Rusia|Rwanda|Arab Saudi|Pulau Solomon|Seychelles|Sudan|Swedia|Singapura|St. Helena|Slovenia|Svalbard & Jan Mayen|Slowakia|Sierra Leone|San Marino|Senegal|Somalia|Suriname|Sudan Selatan|São Tomé & Príncipe|El Salvador|Sint Maarten|Suriah|Eswatini|Tristan Da Cunha|Kepulauan Turks & Caicos|Chad|Teritori Selatan Prancis|Untuk pergi|Thailand|Tajikistan|Tokelau|Timor-Leste|Turkmenistan|Tunisia|Tonga|Turki|Trinidad & Tobago|Tuvalu|Taiwan|Tanzania|Ukraina|Uganda|Kepulauan Terluar AS|Persatuan negara-negara|Amerika Serikat|Uruguay|Uzbekistan|Kota Vatikan|St. Vincent & Grenadines|Venezuela|Kepulauan Virgin Inggris|Kepulauan Virgin AS|Vietnam|Vanuatu|Wallis & Futuna|Samoa|Kosovo|Yaman|Mayotte|Afrika Selatan|Zambia|Zimbabwe|Inggris|Skotlandia|Wales|Texas (US-TX)".split('|'),
  },
  get list() {
    const data = [];

    this.emoji.forEach((el, i) => {
      data.push({
        id: i+1,
        emoji: el,
        name: {
          id: this.name.id[i],
        },
      })
    });

    return data;
  },
}