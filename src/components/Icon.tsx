import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

import sparkles from '@assets/icn-sparkles-4.svg';
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
import users from '@assets/title-illustration.svg';
import newWallet from '@assets/icn-new-wallet.svg';

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
  sparkles,
  oval,
  users,
  swoosh,
  bank,
  withMYC,
  protect,
  opensource,
  vault,
  dashboard,
  newWallet,
  manageYourWallets,
  controlCrypto,
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

const Icon = ({ name, ...props }: IconProps & BoxProps) => {
  const SVGIcon = IconMap[name];
  return (
    <Box {...props}>
      <SVGIcon width="auto" height="100%" />
    </Box>
  );
};

export default Icon;
