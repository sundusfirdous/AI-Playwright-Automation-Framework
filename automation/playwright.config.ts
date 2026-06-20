import {defineConfig,devices} from '@playwright/test';


export default defineConfig({

testDir:"./tests",

timeout:30000,


reporter:[
 ['html'],
 ['list']
],


use:{

baseURL:"https://www.saucedemo.com",

trace:"on-first-retry",

screenshot:"only-on-failure",

video:"retain-on-failure"

},



projects:[

{
name:"Chrome",
use:{
...devices["Desktop Chrome"]
}
},

{
name:"Firefox",
use:{
...devices["Desktop Firefox"]
}
},

{
name:"Webkit",
use:{
...devices["Desktop Safari"]
}
}

]


});
