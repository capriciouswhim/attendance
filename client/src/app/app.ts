import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'cws-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('attendance-client')
}
