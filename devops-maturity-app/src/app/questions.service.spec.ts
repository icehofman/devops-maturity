import { TestBed, inject } from '@angular/core/testing';
import { QuestionsService } from './questions.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('QuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsService],
      imports: [
        HttpClientTestingModule,
      ],
    });
  });

  it('should be created', inject([QuestionsService], (service: QuestionsService) => {
    expect(service.baseUrl).toBeTruthy();
  }));
});
