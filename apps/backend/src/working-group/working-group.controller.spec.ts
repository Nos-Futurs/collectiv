import { Test, TestingModule } from '@nestjs/testing';
import { WorkingGroupController } from './working-group.controller.js';

describe('WorkingGroupController', () => {
  let controller: WorkingGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingGroupController],
    }).compile();

    controller = module.get<WorkingGroupController>(WorkingGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
