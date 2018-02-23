import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavService } from './services/nav.service';
import { MembersComponent } from './members/members.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { ContentComponent } from './content/content.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { ActivitiesComponent } from './activities/activities.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { EventlogComponent } from './eventlog/eventlog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    SidemenuComponent,
    HomeComponent,
    LoginComponent,
    MembersComponent,
    CelebritiesComponent,
    ContentComponent,
    InventoryComponent,
    AuctionsComponent,
    ActivitiesComponent,
    OrdersComponent,
    TransactionsComponent,
    UsermanagementComponent,
    EventlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', redirectTo : 'Login', pathMatch : 'full'},
      { path : 'Dashboard', component : HomeComponent},
      { path : 'Activities', component : ActivitiesComponent},
      { path : 'Auctions', component : AuctionsComponent},
      { path : 'Celebrities', component : CelebritiesComponent},
      { path : 'Content', component : ContentComponent},
      { path : 'Eventlog', component : EventlogComponent},
      { path : 'Inventory', component : InventoryComponent},
      { path : 'Members', component : MembersComponent},
      { path : 'Orders', component : OrdersComponent},
      { path : 'Transactions', component : TransactionsComponent},
      { path : 'Usermanagement', component : UsermanagementComponent},
      { path : 'Login', component : LoginComponent}
    ])
  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
