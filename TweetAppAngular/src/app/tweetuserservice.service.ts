import { liketweet } from './liketweet';
import { getAllUser } from './getalluser';
import { getTestBed } from '@angular/core/testing';
import { gettweets } from './gettweets';
import { updateTweeting } from './updatetwit';
import { ReplyTweet } from './replytweet';
import { tweets1 } from './tweet';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweeting } from './tweeting';

@Injectable({
  providedIn: 'root'
})
export class TweetuserserviceService {



  constructor(private http: HttpClient) { }

  public doRegistration(user: any){
    return this.http.post("http://localhost:8090/tweets/register", user, {responseType: 'text' as 'json'});
  }

  public getAlltweets(): Observable<tweets1[]> {
    return this.http.get<tweets1[]>("http://localhost:8090/tweets/all");
  }

  public login(uname: string, password: string) {
    return this.http.get("http://localhost:8090/tweets/login/"+uname+"/"+password, {responseType: 'text' as 'json'})
  }

  public sharetweet(tw: any){
    return this.http.post("http://localhost:8090/tweets/"+tw.uname+"/add", tw, {responseType: 'text' as 'json'})
  }

  public forgetpass(uname: string, user: User){
    return this.http.put("http://localhost:8090/tweets/"+uname+"/forgot", user, {responseType: 'text' as 'json'});
  }

  public getUser(uname: String) {
    return this.http.get<User>("http://localhost:8090/tweets/user/"+uname);
  }

  public getTweetData(tid: String) {
    return this.http.get<updateTweeting>("http://localhost:8090/tweet/"+tid);
  }

  public deletetweet1(uname:string, tid: string){
    return this.http.delete("http://localhost:8090/tweets/"+uname+"/delete/"+tid, {responseType: 'text' as 'json'});
  }

  public replytweet(rname:string, tid: string, reply: ReplyTweet){
    return this.http.post("http://localhost:8090/tweets/"+rname+"/reply/"+tid, reply, {responseType: 'text' as 'json'});
  }

  public showreply(tid: string){
    return this.http.get<ReplyTweet>("http://localhost:8090/reply/"+tid);
  }

  public updatetweet(uname: string, tid: string, tweet: updateTweeting){
    return this.http.put("http://localhost:8090/tweets/"+uname+"/update/"+tid, tweet, {responseType: 'text' as 'json'});
  }

  public showmytweet(uname: string): Observable<gettweets[]>{
    return this.http.get<gettweets[]>("http://localhost:8090/tweets/"+uname);
  }

  public showalluser(str: string): Observable<getAllUser[]>{
    return this.http.get<getAllUser[]>("http://localhost:8090/tweets/user/search/"+str);
  }

  public getAllUser(): Observable<getAllUser[]>{
    return this.http.get<getAllUser[]>("http://localhost:8090/tweets/users/all");
  }

  public getLikes(tid: string) {
    return this.http.get("http://localhost:8090/tweet/likes/"+tid, {responseType: 'text' as 'json'});
  }

  public doLikes(uname:string, tid: string, like: liketweet) {
    return this.http.put("http://localhost:8090/tweet/"+uname+"/like/"+tid, like, {responseType: 'text' as 'json'});
  }
}
