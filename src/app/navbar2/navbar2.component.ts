import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomToastrService } from '../services/ui/custom-toastr.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.scss'
})
export class Navbar2Component {
  
  
  constructor(private router: Router, private toastrService: CustomToastrService) {}

  refreshPage(): void {
    window.location.reload();
  }

  logout(): void {
    // Kullanıcı çıkış yaptığında çalışacak fonksiyon
    // Burada gerekirse local storage temizlenebilir
    this.router.navigateByUrl(''); // Kullanıcıyı çıkış yaptıktan sonra giriş sayfasına yönlendir
    this.toastrService.showSuccess('Çıkış Yapıldı', '');
  }
}
