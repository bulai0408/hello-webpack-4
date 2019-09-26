export interface IBannerParams {
  // 0: pc
  // 1: android
  // 2: iphone
  // 3: ipad
  type: 0 | 1 | 2 | 3;
}

export interface IBannerItem {
  pic: string;
  targetId: number;
  adid: null;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
  adurlV2: null;
  exclusive: boolean;
  monitorImpress: null;
  monitorClick: null;
  monitorType: null;
  monitorImpressList: [];
  monitorClickList: [];
  monitorBlackList: null;
  extMonitor: null;
  extMonitorInfo: null;
  adSource: null;
  adLocation: null;
  encodeId: string;
  program: null;
  event: null;
  video: null;
  song: null;
  bannerId: string;
  alg: null;
  scm: string;
  requestId: string;
  showAdTag: boolean;
  pid: null;
  showContext: null;
  adDispatchJson: null;
}

export interface IBannerResult {
  banners: IBannerItem[];
}
