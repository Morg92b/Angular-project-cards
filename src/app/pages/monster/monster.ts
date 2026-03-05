import { MonsterService } from './../../services/monster/monster';
import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCard } from "../../components/playing-card/playing-card";
import { Monster } from '../../models/monster.model';


@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [ReactiveFormsModule, PlayingCard],
  templateUrl: './monster.html',
  styleUrl: './monster.css',
})
export class MonsterComponent implements OnInit, OnDestroy{

  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private MonsterService = inject(MonsterService);
  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;

  formGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', [Validators.required]],
    type: [MonsterType.JEDI, [Validators.required]],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption: ['', [Validators.required]],
    attackName: ['', [Validators.required]],
    attackStrength: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    attackDescription: ['', [Validators.required]],
  });

  monster: Monster = Object.assign(new Monster(), this.formGroup.value);
  monsterTypes = Object.values(MonsterType);
  monsterId = -1;


  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.monster = Object.assign(new Monster(), data);
    });
    this.routeSubscription = this.route.params.subscribe(params => {
      if (params['monster']) {
        this.monsterId = parseInt(params['monster']);
        const monsterFound = this.MonsterService.get(this.monsterId);
        if (monsterFound) {
          this.monster = monsterFound;
          this.formGroup.patchValue(this.monster);
        }
        }
    });
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.monsterId === -1) {
      this.MonsterService.add(this.monster);
    } else {
      this.monster.id = this.monsterId;
      this.MonsterService.update(this.monster);
    }
    this.navigateBack();
  }

  isFieldValid(fieldname: string) {
    const formControl = this.formGroup.get(fieldname);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string
        });
      };
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.formValuesSubscription?.unsubscribe();
  }

}
