import { Compact } from '@polkadot/types';
import { Balance } from '@polkadot/types/interfaces';
import Call from '@polkadot/types/primitive/Generic/Call';
import { setSS58Format } from '@polkadot/util-crypto';

import { KUSAMA_SS58_FORMAT } from '../util/constants';

export function getMethodData(method: Call): any {
  setSS58Format(KUSAMA_SS58_FORMAT);
  if (
    method.methodName === 'transfer' ||
    method.methodName === 'transferKeepAlive'
  ) {
    return {
      amount: (method.args[1] as Compact<Balance>).toNumber(),
      keepAlive: method.methodName === 'transferKeepAlive',
      to: method.args[0].toString()
    };
  } else if (method.methodName === 'bond') {
    return {
      controller: method.args[0].toString(),
      value: (method.args[1] as Compact<Balance>).toNumber(),
      payee: method.args[2].toString()
    };
  } else if (method.methodName === 'nominate') {
    return {
      targets: method.args[0].toString()
    };
  } else if (method.methodName === 'unbond') {
    return {
      value: (method.args[0] as Compact<Balance>).toNumber()
    };
  } else {
    return {
      error: 'Cannot decode this method.'
    };
  }
}
