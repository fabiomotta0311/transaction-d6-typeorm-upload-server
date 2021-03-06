import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

export default class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionRepository);
    const findTransactionById = await transactionRepository.findOne(id);

    if (!findTransactionById) {
      throw new AppError('No transaction found with this ID');
    }

    await transactionRepository.delete(id);
  }
}
