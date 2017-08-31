import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AmbitionsPage } from '../pages/ambitions/ambitions';
import { BlogPage } from '../pages/blog/blog';
import { SkillsPage } from '../pages/skills/skills';
import { ProjectsPage } from '../pages/projects/projects';
import { WorkExperiencePage } from '../pages/work_experience/work_experience';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { IonicStorageModule } from '@ionic/storage';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2d36772e'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    BlogPage,
    AmbitionsPage,
    SkillsPage,
    ProjectsPage,
    WorkExperiencePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    BlogPage,
    AmbitionsPage,
    WorkExperiencePage,
    SkillsPage,
    ProjectsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
