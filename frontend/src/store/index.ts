import { defineStore } from "pinia";
import { GitHubUser } from "./GitHubUser";
import axios from "../plugins/axios";

export type AppItem = {
  title: string;
  name: string;
  icon: string;
}

export type RootState = {
  jwt: string;
  githubToken: string;
  isAuthenticated: boolean,
  ghUser: GitHubUser | null;
  baseUrl: string;
  apps: AppItem[];
};

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      jwt: "",
      githubToken: "",
      isAuthenticated: false,
      ghUser: null,
      baseUrl: "",
      apps: [],
    } as RootState;
  },
  actions: {
    setJWT(jwt: string): void {
      localStorage.setItem("jwt.token", jwt);
      this.jwt = jwt;
    },
    setGitHubToken(githubToken: string): void {
      localStorage.setItem("gh.token", githubToken);
      this.githubToken = githubToken;
      this.isAuthenticated = true;
    },
    setUser(ghUser: GitHubUser): void {
      this.ghUser = ghUser;
    },
    logout(): void {
      localStorage.removeItem("jwt.token");
      localStorage.removeItem("gh.token");
      this.isAuthenticated = false
      this.jwt = "";
      this.githubToken = "";
      this.ghUser = null;
    },
    setBaseUrl(baseUrl: string): void {
      this.baseUrl = baseUrl;
    },
    setApps(apps: AppItem[]): void {
      this.apps = apps;
    },
    async login(jwtToken: string, ghToken: string): Promise<void> {
      try {
        this.setJWT(jwtToken);

        // get user info with jwt(auth to middleware) and github token(auth to github)
        const ghUser = await axios.post(this.getBaseUrl + "/users/user", {
          access_token: ghToken,
        });

        // get new apps for user
        const apps = await axios.get(this.getBaseUrl + "/users/apps");

        this.setApps(apps.data.apps);
        this.setUser(ghUser.data.user);
        this.setGitHubToken(ghToken);
      } catch (error) {
        console.log(error)
      }
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
      return this.ghUser;
    },
    isUserAuthenticated(): boolean {
      return this.isAuthenticated;
    },
    getBaseUrl(): string {
      return this.baseUrl;
    },
    getApps(): AppItem[] {
      return this.apps;
    }
  }
});