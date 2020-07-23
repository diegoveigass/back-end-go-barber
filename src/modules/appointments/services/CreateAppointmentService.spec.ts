import AppError from '@shared/errors/AppError';

import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;
let fakeNotificationsRepository: FakeNotificationsRepository;
let fakeCacheProvider: FakeCacheProvider;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
      fakeNotificationsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 27, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 5, 27, 13),
      provider_id: '12345',
      user_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12345');
  });

  it('should not be able to create two appointments in the same time', async () => {
    const appointmentDate = new Date(2022, 6, 16, 15);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: '123123',
      provider_id: '12345',
    });
    await expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '123123',
        provider_id: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud not be able to create an appointments on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 27, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 27, 11),
        user_id: '123123',
        provider_id: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 27, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 27, 13),
        user_id: 'user-id',
        provider_id: 'user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 27, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 28, 7),
        user_id: 'user-id',
        provider_id: 'provider-id',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 28, 18),
        user_id: 'user-id',
        provider_id: 'provider-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
