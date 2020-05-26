import React from 'react';
import { Image, ImageProps } from '@components';

import oval from '@assets/icn-oval.svg';
import swoosh from '@assets/icn-purple-swoosh.svg';
import bank from '@assets/illo-bank.svg';
import withMYC from '@assets/illo-with-mycrypto.svg';
import protect from '@assets/icn-protect.svg';
import opensource from '@assets/icn-opensource.svg';
import vault from '@assets/icn-vault2.svg';
import dashboard from '@assets/illo-view-dashboard.svg';
import manageYourWallets from '@assets/illo-manage-your-wallets.svg';
import controlCrypto from '@assets/control-crypto.svg';
import dashboardMobile from '@assets/view-dashboard-mobile.svg';
import manageYourWalletsMobile from '@assets/manage-your-wallets-mobile.svg';
import controlCryptoMobile from '@assets/control-crypto-mobile.svg';
import newWallet from '@assets/icn-new-wallet.svg';
import signIn from '@assets/icn-sign-in.svg';
import existingWallet from '@assets/icn-existing-wallet.svg';
import bottle from '@assets/illo-bottle.svg';
import more from '@assets/icn-more.svg';

/**
 * Wallets
 */
import metamask from '@assets/wallets/metamask.svg';
import ledger from '@assets/wallets/ledger.svg';
import trezor from '@assets/wallets/trezor.svg';
import walletconnect from '@assets/wallets/walletconnect.svg';
import frame from '@assets/wallets/frame.svg';
import web3Default from '@assets/wallets/web3-default.svg';
import trust from '@assets/wallets/trust-2.svg';

const IconMap = {
  oval,
  swoosh,
  signIn,
  bottle,
  existingWallet,
  bank,
  more,
  withMYC,
  protect,
  opensource,
  vault,
  dashboard,
  newWallet,
  manageYourWallets,
  controlCrypto,
  dashboardMobile,
  manageYourWalletsMobile,
  controlCryptoMobile,
  metamask,
  ledger,
  trezor,
  walletconnect,
  frame,
  trust,
  web3Default,
};

export type IconName = keyof typeof IconMap;

type IconProps = {
  name: IconName;
};

const Icon = ({
  name,
  width = 'auto',
  height = 'auto',
  ...props
}: IconProps & ImageProps) => {
  const SVGIcon = IconMap[name as IconName];
  return <Image src={SVGIcon} width={width} height={height} {...props} />;
};

export default Icon;
