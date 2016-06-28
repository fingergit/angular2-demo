# 常用代码：

## 基础

1. 单向数据绑定：`<h1>{{title}}</h1>`，title为组件类属性。
1. 双向数据绑定：`<input [(ngModel)]="title">`
1. ngFor使用：
    ```
    <li *ngFor="let hero of heroes">{{hero.name}}</li>
    ```
    其中heroes为component的数组属性，hero为取出的每个数组元素。
1. ngIf使用：
    ```
    <div *ngIf="selectedHero"></div>
    ```
    只有当selectedHero为true时，才显示div。

1. 设置CSS类：
    ```
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"></li>
    ```
    对应样式表中的li.selected{}

1. 点击事件：
    ```
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
    ```
    其中，onSelect为组件类的方法。

1. 获取指定id的hero:
    heroes.filter(hero => hero.id === id)[0];

## 创建Component:

1. 创建类app.component.ts：
    ```
    import { Component,OnInit } from '@angular/core';
    @Component({
      selector: 'my-app'
      ,templateUrl: 'app/app.component.html'
      ,styleUrls: ['app/app.component.css']
    })
    export class AppComponent implements OnInit {
      title = 'Tour of Heroes';
      ngOnInit() {
        this.getHeroes();
      }
    }

    ```
1. 创建模板文件app.component.html：
    ```
    <h1>{{title}}</h1>
    ```
1. 创建样式文件app/app.component.css，普通的css文件。

1. 在html中引用component:
    ```
    <body>
        <my-app>Loading...</my-app>
    </body>
    ```

1. 在其它component中引用并传参：

    html中：
    ```
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    ```

    selectedHero是当前component类的属性，my-hero-detail为引用的component的selector，hero为引用的component暴露的参数。

    类文件中：
    @Component中，增加引用的component指令。
    directives: [HeroDetailComponent]

1. component类暴露参数：
    ```
    import { Component, Input } from '@angular/core';
    extern class xxxComponent{
      @Input()
      hero: Hero;
    }
    ```

## 创建Service:
1. 创建
   ```
   import {Injectable} from '@angular/core';
   import {HEROES} from "./mock-heroes";

   @Injectable()
   export class HeroService{
       getHeroes(){
           return Promise.resolve(HEROES);
       }
   }
   ``

1. 引用
```
import { HeroService } from './hero.service';
@Component({
    providers: [HeroService]
})
extern class XxxComponent implements OnInit{
    constructor(private heroService: HeroService) { }
    ngOnInit() {
        this.getHeroes();
    }
}
```

## 使用路由
1. 在index.html中增加base(head元素中，第一个位置):

   ```
   <head>
        <base href="/">
        ...
   </head>
   ```

1. AppComponent类文件中：

    ```
    @Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html'
        // HeroesComponent和HeroDetailComponent是两个跳转的页面。
        ,directives: [ROUTER_DIRECTIVES, HeroesComponent,HeroDetailComponent]
        ,providers: [ROUTER_PROVIDERS, HeroService]
    })
    @RouteConfig([
        // 定义一个路由
        {
            // path：会在URL地址栏中增加此地址。
            path: '/heroes'
            ,name: 'Heroes'
            ,component: HeroesComponent
        }
        ,{
            path: '/hero-detail'
            ,name: 'HeroDetail'
            ,component: HeroDetailComponent
            ,useAsDefault: true
        }
    ])
    export class AppComponent {
        title: 'Tour of Heroes';
    }

    ```

    useAsDefault: 缺省显示此页。

1. template文件中
    ```
    <div>{{title}}</div>
    <div>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['HeroDetail']">Hero Detail</a>
    </div>
    <router-outlet></router-outlet>
    ```
    其中['Heroes']和['HeroDetail']对应的是@RouteConfig中的name属性。

1. 路由时传参

    @RouteConfig中：
    ```
    ,{
        path: '/detail/:id'
        ,name: 'HeroDetail'
        ,component: HeroDetailComponent
        ,useAsDefault: true
    }
    ```

    定义了path中带有id参数。

    目标Comonent中：
    ```
    heroId: number;
    constructor(private heroService: HeroService
                    ,private routeParams: RouteParams){
        }

    ngOnInit(){
        // 获取参数。
        let id = +this.routeParams.get('id');
        this.heroId = id;
    }
    ```

    目标模板中：
    ```
    <div>hello, hero.{{heroId}}</div>
    ```


## 使用Promise
   发出Promise:
   Promise.resolve(HEROES);
   返回一个Promise对象。
   获取Promise中的数据：
   promise.then(heroes => this.heroes = heroes);

## 模拟异步读取
   ```
   getHeroesSlowly() {
     return new Promise<Hero[]>(resolve =>
       setTimeout(() => resolve(HEROES), 2000) // 2 seconds
     );
   }
   ```
