export class ResultComponent implements OnInit, OnDestroy {
  closetLength: number = 0;
  private subscription: Subscription;

  constructor(private clothingService: ClothingService) {}

  ngOnInit() {
    this.subscription = this.clothingService.closetLength$.subscribe(length => {
      this.closetLength = length;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
