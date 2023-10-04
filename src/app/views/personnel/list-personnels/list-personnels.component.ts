import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonnelPersonnel } from 'src/app/models/personnelPersonnel';
import { AuthService } from 'src/app/services/auth.service';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-list-personnels',
  templateUrl: './list-personnels.component.html',
  styleUrls: ['./list-personnels.component.css']
})
export class ListPersonnelsComponent implements OnInit{
  personnels: PersonnelPersonnel[] = [];
  currentUser:any
  codeEtab:any
  displayedColumns: string[] = ['nomPren', 'codeGenr', 'dateNais','codeNiveEtud','codeSituFami','codeGrad','codeQual','codeSituProf','codeFonc'];
  dataSource!: MatTableDataSource<PersonnelPersonnel>;

  genre:any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private _service:PersonnelService,private _login:AuthService){}
  ngOnInit(): void {
    this.currentUser = this._login.getCurrentUser().subscribe((data:any)=>{
      this.currentUser = data
      this.codeEtab = this.currentUser.codeEtab;
      console.log(this.currentUser)
    })
    
    this._service.getPersonnelByCode(this.codeEtab).subscribe((data:any)=>{
      this.personnels = data;
      
      this.dataSource = new MatTableDataSource(this.personnels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.personnels)
    })
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  libeGenre:any
  getLibeGenre(code:any):string{
    this._service.getGenreByCode(code).subscribe((data:any)=>{
      this.genre = data;
    }
    )
    this.libeGenre = this.genre.libeGenre
    //console.log(this.libeGenre)
    return this.libeGenre
  }

}
