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