import userEvent from '@testing-library/user-event';
import { searcBarSetup } from '../../test-utils/setup';

test('invoke onHandleChange while prompting ', async () => {
  const {input, onHandleChange} = searcBarSetup()
  await userEvent.type(input, 'hola');
  expect(onHandleChange).toHaveBeenCalled();
});
