import { createStore } from "vuex";

export default createStore({
  state: {
    br: {
      home: {
        p: "Hello, I'm",
        h1: "Yuri Rolandi",
        h2: "Frontend developer",
        btn: "More about me",
        btn2: "portfolio",
      },
      about: {
        title: "About Me",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
        skills: "skills",
        tab_education: "Education",
        tab_experience: "Experience",
        timeLine: [
          {
            education: [
              {
                line_date: "2021 - 2018",
                line_title: "Bacharel de tecnologia - <span>Estácio de sá",
                line_subtitle: "Estácio de sá",
                line_text:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
              },
            ],
          },
          {
            experience: [
              {
                line_date: "2021 - 2018",
                line_title: "Bacharel de tecnologia - <span>Estácio de sá",
                line_subtitle: "Estácio de sá",
                line_text:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
              },
            ],
          },
        ],
      },
      portfolio: {
        title: "Recent work",
        item_course_title: "education course website",
        item_course_text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
        item_course_date: {
          item: "created",
          date: "4 dec 2020",
        },
        item_course_tec: {
          item: "technologies used",
          stack: "Html, css",
        },
        item_course_role: {
          item: "Role",
          stack: "Frontend",
        },
        item_course_view: {
          item: "View Online",
          stack: "www.domain.com.br",
        },
      },
      contact: {
        title: "Contact Me",
        Phone: "Phone",
      },
    },
    en: {
      home: {
        p: "Hello, I'm",
        h1: "Yuri Rolandi",
        h2: "Frontend developer",
        btn: "More about me",
        btn2: "portfolio",
      },
      about: {
        title: "About Me",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
        skills: "skills",
        tab_education: "Education",
        tab_experience: "Experience",
        timeLine: [
          {
            education: [
              {
                line_date: "2021 - 2018",
                line_title: "Bacharel de tecnologia - <span>Estácio de sá",
                line_subtitle: "Estácio de sá",
                line_text:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
              },
            ],
          },
          {
            experience: [
              {
                line_date: "2021 - 2018",
                line_title: "Bacharel de tecnologia - <span>Estácio de sá",
                line_subtitle: "Estácio de sá",
                line_text:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
              },
            ],
          },
        ],
      },
      portfolio: {
        title: "Recent work",
        item_course_title: "education course website",
        item_course_text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
        item_course_date: {
          item: "created",
          date: "4 dec 2020",
        },
        item_course_tec: {
          item: "technologies used",
          stack: "Html, css",
        },
        item_course_role: {
          item: "Role",
          stack: "Frontend",
        },
        item_course_view: {
          item: "View Online",
          stack: "www.domain.com.br",
        },
      },
      contact: {
        title: "Contact Me",
        Phone: "Phone",
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
