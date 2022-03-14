import { defineStore } from "pinia";
// import { useRouter } from "vue-router";

import { GitHubUser } from "./GitHubUser";



export type RootState = {
  jwt: string;
  githubToken: string;
  isAuthenticated: boolean,
  user: GitHubUser | null;
};

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      jwt: "",
      githubToken: "",
      isAuthenticated: false,
      user: null,
    } as RootState;
  },
  actions: {
    setJWT(jwt: string): void {
      localStorage.setItem("jwt.token", jwt);
      this.jwt = jwt;
    },
    setGitHubToken(githubToken: string): void {
      this.githubToken = githubToken;
      this.isAuthenticated = true;
    },
    setUser(user: GitHubUser): void {
      this.user = user;
    },
    logout(): void {
      localStorage.removeItem("jwt.token");
      this.isAuthenticated = false
      this.jwt = "";
      this.githubToken = "";
      this.user = null;
    }
  },
  getters: {
    getJWT(): string {
      return this.jwt;
    },
    getGitHubToken(): string {
      return this.githubToken;
    },
    getUser(): GitHubUser | null {
      return this.user;
    },
    isUserAuthenticated(): boolean {
      return this.isAuthenticated;
    }
  }
});