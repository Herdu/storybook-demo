import type { Meta, StoryObj } from "@storybook/angular";
import { UserDetailsComponent } from "./user-details.component";

const meta: Meta<UserDetailsComponent> = {
  title: "User/UserDetails",
  component: UserDetailsComponent
};

export default meta;

type UserDetailsStory = StoryObj<UserDetailsComponent>;

export const primary: UserDetailsStory = {};


