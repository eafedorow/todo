import {Action, State, StateContext} from "@ngxs/store";
import { ToggleSidebar } from "./actions/sidebar.actions";
import { Injectable } from "@angular/core";

export interface MainStateModel {
  isSidebarToggled: boolean;
}

@State<MainStateModel>({
  name: 'main',
  defaults: {
    isSidebarToggled: false
  }
})
@Injectable()
export class MainState {
  @Action(ToggleSidebar)
  ToggleSidebar(ctx: StateContext<MainStateModel>, { isToggled }: { isToggled: boolean }) {
    ctx.setState({ isSidebarToggled: isToggled });
  }
}
