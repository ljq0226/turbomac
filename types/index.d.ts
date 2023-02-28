
declare module 'react-rangeslider'

import React from "react";
import { UserData } from './configs/user';


export interface MacActions {
  setLogin: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  shutMac: (e: React.MouseEvent) => void;
  restartMac: (e: React.MouseEvent) => void;
  sleepMac: (e: React.MouseEvent) => void;
}

export { WallpaperData, AppsData, UserData } from './configs'
