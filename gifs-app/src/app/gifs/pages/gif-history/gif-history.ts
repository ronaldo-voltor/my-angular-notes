import { Component, computed, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-history',
  imports: [GifList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  gifService = inject(GifService);
  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));
  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
