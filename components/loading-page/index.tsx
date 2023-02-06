import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { BlockMain } from './style';

const LoadingPage = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        router.isReady && setIsLoading(false);
    }, [router.isReady]);

    return <BlockMain loading={isLoading} />;
};

LoadingPage.defaultProps = {
    theme: themeDefault
};

export default withTheme(LoadingPage);
