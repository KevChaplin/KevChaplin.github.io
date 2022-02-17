function switchLanguage() {
  let lang = i18next.language
  console.log(lang)
  // lang === 'en' ? lang = 'jp' : lang = 'en'
  
  // i18next.changeLanguage(lang, (err, t) => {
  //   if (err) return console.log('something went wrong loading', err);
  //   t('key'); // -> same as i18next.t
  // })
}

// const rerender = () => {
//   $('body').localize()
// }

$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
      // detect user language
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      .use(i18nextBrowserLanguageDetector)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
          en: {
            translation: {
              nav: {
                title: "Kevin Chaplin",
                subTitle: "Front-End Engineer",
                link1: "Intro",
                link2: "Portfolio",
                link3: "About Me",
                link4: "Contact"
              },
              intro: {
                title: "Kevin Chaplin",
                subTitle: "Front-End Engineer",
                location: "Japan",
                button: "Continue"
              },
              portfolio: {
                title: "Portfolio",
                subTitle: "See a live version or check out the code in the relevant Github repository.",
                project1: {
                  name: "Interpreter Homepage"
                },
                project2: {
                  name: "Rate My Racing"
                },
                project3: {
                  name: "Japan Environmental Dashboard"
                },
                project4: {
                  name: "JavaScript Calculator"
                }
              },
              about: {
                title: "About Me",
                body: `Self-taught Front-End Engineer with excellent working knowledge of HTML, CSS, JavaScript, React, Material UI, Svelte, D3.js, Git and Github. 
                Track record of excelling in any environment. 
                Bsc (Hons) Mathematics graduate, JLPT N3 certified Japanese with a rich and diverse career. Including: 
                Military Analyst (including two operational deployments); professional International Karate Instructor; and Prisoner Custody Officer.
                Family man, married with two children. 
                Click below for full resume.`
              },
              contact: {
                title: "Contact",
                subTitle: "I look forward to hearing from you.",
                placeholder: {
                  name: "Name",
                  email: "Email",
                  message: "Message"
                },
                button: "Submit"
              }
            }
          },
          jp: {
            translation: {
              nav: {
                title: "チャップリン　ケビン",
                subTitle: "フロンとエンドエンジニア",
                link1: "トップ",
                link2: "ポートフォリオ",
                link3: "自己紹介",
                link4: "お問い合わせ"
              },
              intro: {
                title: "チャップリン　ケビン",
                subTitle: "フロンとエンドエンジニア",
                location: "日本",
                button: "次へ"
              },
              portfolio: {
                title: "ポートフォリオ",
                subTitle: "生バージョンかGitHubでコードも見られます",
                project1: {
                  name: "翻訳者のホームページ"
                },
                project2: {
                  name: "私のレーシングを評価する"
                },
                project3: {
                  name: "日本の環境　ダッシュボード"
                },
                project4: {
                  name: "JavaScript 計算機"
                }
              },
              about: {
                title: "自己紹介",
                body: `Self-taught Front-End Engineer with excellent working knowledge of HTML, CSS, JavaScript, React, Material UI, Svelte, D3.js, Git and Github. 
                Track record of excelling in any environment. 
                Bsc (Hons) Mathematics graduate, JLPT N3 certified Japanese with a rich and diverse career. Including: 
                Military Analyst (including two operational deployments); professional International Karate Instructor; and Prisoner Custody Officer.
                Family man, married with two children. 
                Click below for full resume.`
              },
              contact: {
                title: "お問い合わせ",
                subTitle: "ご連絡にお待ちしております。",
                placeholder: {
                  name: "名前",
                  email: "メール",
                  message: "メッセージ"
                },
                button: "送信"
              }
            }
          }
        }
      }, (err, t) => {
        if (err) return console.error(err);
  
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  
        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $('body').localize();
      });
  });