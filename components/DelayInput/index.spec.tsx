import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react';
import { DelayInput } from './index';

describe('DelayInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    // INFO: 時間経過を待つ処理がある場合、擬似的に時間の経過を操作する
    jest.useFakeTimers();
    handleChange = jest.fn();
    renderResult = render(<DelayInput onChange={handleChange} />);
  });

  afterEach(() => {
    renderResult.unmount();
    jest.useFakeTimers();
  });

  /**
   * @desc 初期表示時に表示されるテキストが正しいこと
   */
  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent('入力したテキスト：');
  });

  it('shoud display 「入力中...」immediately after onChange event occuers', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent('入力中...');
  });

  it('shoud display input text 1sec after onChange event occures', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });
    // INFO: act = タイマーのcallback中で起きる状態変更が反映されることを保証
    await act(() => {
      jest.runAllTimers();
    });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent(`入力したテキスト： ${inputText}`);
  });

  it('should call onChange 1sec after onChange event occurs', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText }});
    await act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
