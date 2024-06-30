import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {
  

  api:string ="http://127.0.0.1:5000"
  private countSourceAtalaryaAndPositiveClassUrl = 'http://127.0.0.1:5000/count_source_atalyar_and_predicted_class_positif';  // URL pour compter les documents avec source = 'atalayar' et predicted_class = 2
  private countSourceAtalaryaAndNegativeClassUrl = 'http://127.0.0.1:5000/count_source_atalayar_and_predicted_class_negatif';  // URL pour compter les documents avec source = 'atalayar' et predicted_class = 0

  private countSourceAfricaAndPositiveClassUrl = '';  // URL pour compter les documents avec source = 'africa' et predicted_class = 2
  private countSourceAfricaAndNegativeClassUrl = 'http://127.0.0.1:5000/count_source_africa_and_predicted_class_negatif';  // URL pour compter les documents avec source = 'africa' et predicted_class = 0
  constructor(private http:HttpClient
  ) { }

  findAllArticle():Observable<any>{
     return this.http.get<any>(`${this.api}/documents`)
  }


  getNombreArticlePositif():Observable<any>{
    return this.http.get<any>(`http://127.0.0.1:5000/positif`)
 }

 getNombreArticleNegatif():Observable<any>{
  return this.http.get<any>(`${this.api}/negatif`)
}


getNombreArticleNeutre():Observable<any>{
  return this.http.get<any>(`http://127.0.0.1:5000/neutre`)
}


getNombreArticleAfrica():Observable<any>{
  return this.http.get<any>(`http://127.0.0.1:5000/count_source_africa`)
}

getNombreArticleTalarya():Observable<any>{
  return this.http.get<any>(`http://127.0.0.1:5000/count_source_atalayar`)
}



countSourceAtalaryaAndPositiveClass(): Observable<any> {
  return this.http.get<any>(this.countSourceAtalaryaAndPositiveClassUrl);
}

countSourceAtalaryaAndNegativeClass(): Observable<any> {
  return this.http.get<any>("http://127.0.0.1:5000/count_source_atalyar_and_predicted_class_negatif");
}

countSourceAfricaAndPositiveClass(): Observable<any> {
  return this.http.get<any>("http://127.0.0.1:5000/count_source_africa_and_predicted_class_positif");
}

countSourceAfricaAndNegativeClass(): Observable<any> {
  return this.http.get<any>(this.countSourceAfricaAndNegativeClassUrl);
}


}
