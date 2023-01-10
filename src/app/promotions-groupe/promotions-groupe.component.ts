import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PromotionGroupe } from '../entities/promotion-groupe';
import { PromotionGroupeServiceService } from '../services/promotion-groupe-service.service';

@Component({
  selector: 'app-promotions-groupe',
  templateUrl: './promotions-groupe.component.html',
  styleUrls: ['./promotions-groupe.component.css'],
})
export class PromotionsGroupeComponent implements OnInit {
  ngOnInit(): void {
    this.getAll();
  }
  promotionsListe: PromotionGroupe[] = [];

  constructor(
    private service: PromotionGroupeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService:MatDialog,
  ) {}
  getAll() {
    this.service.getAll().subscribe(
      (res) => {
        this.promotionsListe = res;
      },
      (error) => {
        console.error(error);
      },
      () => {}
    );
  }
  deletePromotionGroupe(id: number) {
    Swal.fire({
      title: 'Vous etes sur?',
      text: 'Vous ne pouvez pas recupérer votre element!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer-le!',
      cancelButtonText: 'Non, laisser-le',
    }).then((result) => {
      if (result.value) {
        // alert(id);
        this.service.deletePromotion(id).subscribe((res) => {
          this.getAll();
        });
        Swal.fire(
          'Supprimé!',
          'Votre promotion groupe a été supprimé.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Votre promotion groupe est sécurisé 🙂', 'error');
      }
    });
  }
  addPromotionGroupe() {}
  updatePromotionGroupe(id: number) {}
  detailsPromotionGroupe(id: number,content:any) {
  }
  
}
