import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/header/header";
import { Footer } from "./core/footer/footer";
import { Main } from "./main/main";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, Footer, Main],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {

}