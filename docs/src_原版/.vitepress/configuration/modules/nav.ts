import { DefaultTheme } from "vitepress";
import createProjectNavigationStructure from "../../utils";

/** console.log("自动化创建项目结构: ", createProjectNavigationStructure()); */

// 顶部导航栏
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "编程导航",
    link: "/tools/编程导航/Programming",
  },
  ...createProjectNavigationStructure(),
];

/*export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '编程导航',
        link: '/notes/'
    },
    {
        text: '全栈开发',
        items: [
            {
                text: '前端开发',
                items: [
                    {
                        text: 'Vue',
                        link: '/notes/全栈开发/前端开发/vue/Vue'
                    },
                    {
                        text: 'React',
                        link: '/notes/全栈开发/前端开发/react/React'
                    },
                ]
            },
            {
                text: '后端开发',
                items: [
                    {
                        text: 'Flask',
                        link: '/notes/全栈开发/后端开发/flask/Flask'
                    },
                    {
                        text: 'Django',
                        link: '/notes/全栈开发/后端开发/django/Django'
                    },
                    {
                        text: 'Nodejs',
                        link: '/notes/全栈开发/后端开发/nodejs/Nodejs'
                    },
                ]
            },
        ]
    },
    {
        text: '云部署',
        items: [
            {
                text: '运维',
                items: [
                    {
                        text: 'Linux',
                        link: '/notes/云部署/运维/linux/Linux'
                    },
                    {
                        text: '云计算',
                        link: '/notes/云部署/运维/cloud/云计算'
                    },
                    {
                        text: 'Docker',
                        link: '/notes/云部署/运维/docker/Docker'
                    },
                ]
            }
        ]
    }
]*/
