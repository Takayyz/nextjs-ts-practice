import { render, screen, RenderResult, fireEvent, getByRole } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  /**
   * @desc 初期描画時にInputに何も入力されていないこと
   */
  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    expect(inputNode).toHaveValue('');
  });

  /**
   * @desc Inputに入力があった際に、入力されたテキストが期待するものであること
   */
  it('shoud show input text', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText }});

    expect(inputNode).toHaveValue(inputText);
  });

  /**
   * @desc ResetボタンをクリックしたらInputに入力されている値がリセットされること
   */
  it('should reset when user clicks button', () => {
    const inputText = 'Test Input Text';

    const inputNode = screen.getByLabelText('Username') as HTMLElement;
    fireEvent.change(inputNode, { target: { value: inputText }});

    const buttonNode = screen.getByRole('button', { name: 'Reset' }) as HTMLButtonElement;
    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue('');
  });
});
