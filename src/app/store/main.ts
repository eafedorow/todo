import {Injectable} from "@angular/core";
import {State} from "@ngxs/store";
import {MainStoreDefaults} from "./models/store.model";

@State<MainStoreDefaults>({
  name: 'main',
  defaults: {
    isSidebarCollapsed: false,
  }
})
@Injectable()
export class MainStore {
  constructor() {
  }

}
