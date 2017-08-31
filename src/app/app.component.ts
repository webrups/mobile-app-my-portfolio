import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AmbitionsPage } from '../pages/ambitions/ambitions';
import { BlogPage } from '../pages/blog/blog';
import { SkillsPage } from '../pages/skills/skills';
import { ProjectsPage } from '../pages/projects/projects';
import { WorkExperiencePage } from '../pages/work_experience/work_experience';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'person', title: 'About', component: AboutPage },
      { icon: 'book', title: 'Blog', component: BlogPage },
      { icon: 'aperture', title: 'Ambities', component: AmbitionsPage },
      { icon: 'briefcase', title: 'Werkervaring', component: WorkExperiencePage },
      { icon: 'checkbox', title: 'Skills', component: SkillsPage },
      { icon: 'construct', title: 'Projecten', component: ProjectsPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
