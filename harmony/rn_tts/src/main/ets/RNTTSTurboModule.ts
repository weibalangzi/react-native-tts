/**
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';
import {TextToSpeechManager} from './TextToSpeechManager'

type EventCallback = (event: string) => void;


export class RNTTSTurboModule extends TurboModule implements TM.TTSNativeModule.Spec {

  constructor(ctx) {
    super(ctx)
  }

  private TextToSpeechManager = new TextToSpeechManager(this.ctx);

  public getInitStatus(): Promise<"success"> {
    return this.TextToSpeechManager.getInitStatus();
  }

  public requestInstallEngine(): Promise<"success"> {
    return Promise.resolve('success');
  }

  public requestInstallData(): Promise<"success"> {
    return Promise.resolve('success');
  }

  public setDucking(enabled: boolean): Promise<"success"> {
    return Promise.resolve('success');
  }

  public setDefaultEngine(engineName: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  public setDefaultVoice(voiceId: string): Promise<"success"> {
    return Promise.resolve('success');
  }

  public setDefaultRate(rate: number, skipTransform: boolean): Promise<string> {
    return this.TextToSpeechManager.setDefaultRate(rate, skipTransform);
  }

  public setDefaultPitch(pitch: number): Promise<string> {
    return this.TextToSpeechManager.setDefaultPitch(pitch);
  }

  public setDefaultLanguage(language: string): Promise<"success"> {
    return Promise.resolve('success');
  }

  public setIgnoreSilentSwitch(ignoreSilentSwitch: boolean): Promise<boolean> {
    return Promise.resolve(true);
  }

  public voices(): Promise<TM.TTSNativeModule.Voice[]> {
    return this.TextToSpeechManager.voices();
  }

  public engines(): Promise<TM.TTSNativeModule.Engine[]> {
    return Promise.resolve([]);
  }

  public speak(utterance: string, params?: {}): string | number {
    return this.TextToSpeechManager.speak(utterance, params);
  }

  public stop(onWordBoundary: boolean): Promise<boolean> {
    return this.TextToSpeechManager.stop(onWordBoundary);
  }

  public pause(onWordBoundary?: boolean): Promise<boolean> {
    return this.TextToSpeechManager.pause(onWordBoundary);
  }

  public resume(): Promise<boolean> {
    return this.TextToSpeechManager.resume();
  }

  public addEventListener(type: string, callback: EventCallback): void {
    return this.TextToSpeechManager.addEventListener(type, callback);
  }

  public removeEventListener(type: string, callback: EventCallback): void {
    return this.TextToSpeechManager.removeEventListener(type, callback);
  }
}