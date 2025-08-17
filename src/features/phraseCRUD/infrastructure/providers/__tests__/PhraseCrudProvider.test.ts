jest.mock('@/features/phraseCRUD/infrastructure/providers/PhraseCrudProvider', () => ({
    provideCards: jest.fn(),
    provideAddCard: jest.fn(),
    provideDeleteCard: jest.fn(),
  }));
  
  import { provideCards } from '../PhraseCrudProvider';
  import { usePhraseCrudStore } from '@/features/phraseCRUD/stores/phrase-crud.store';
  
  test('fetchCards error', async () => {
    (provideCards as jest.Mock).mockRejectedValue(new Error('Network down'));
  
    await usePhraseCrudStore.getState().fetchCards();
  
    expect(usePhraseCrudStore.getState().loadingFetch).toBe(false);
    expect(usePhraseCrudStore.getState().errorFetch).toBe('Network down');
  });
  
  test('AddCards error', async () => {
    (provideCards as jest.Mock).mockRejectedValue(new Error('Network down'));
  
    await usePhraseCrudStore.getState().addCard("test phrase");
  
    expect(usePhraseCrudStore.getState().loadingAdd).toBe(false);
    expect(usePhraseCrudStore.getState().errorFetch).toBe('Network down');
  });

  test('DeleteCards error', async () => {
    (provideCards as jest.Mock).mockRejectedValue(new Error('Network down'));
  
    await usePhraseCrudStore.getState().deleteCard("test phrase");
  
    expect(usePhraseCrudStore.getState().loadingAdd).toBe(false);
    expect(usePhraseCrudStore.getState().errorFetch).toBe('Network down');
  });