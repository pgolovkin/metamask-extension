import React from 'react';
import { useHistory } from 'react-router-dom';
import { useI18nContext } from '../../../../hooks/useI18nContext';
// Components
import Box from '../../../../components/ui/box';
import Button from '../../../../components/ui/button';
import Typography from '../../../../components/ui/typography';
import {
  BLOCK_SIZES,
  COLORS,
  TYPOGRAPHY,
} from '../../../../helpers/constants/design-system';
// Routes
import { INITIALIZE_SEED_PHRASE_ROUTE } from '../../../../helpers/constants/routes';

export default function SeedPhraseIntro() {
  const t = useI18nContext();
  const history = useHistory();

  const handleNextStep = () => {
    history.push(INITIALIZE_SEED_PHRASE_ROUTE);
  };

  return (
    <div className="seed-phrase-intro">
      <div className="seed-phrase-intro__sections">
        <div className="seed-phrase-intro__left">
          <Typography
            color={COLORS.BLACK}
            variant={TYPOGRAPHY.H1}
            boxProps={{ marginTop: 0, marginBottom: 4 }}
          >
            {t('seedPhraseIntroTitle')}
          </Typography>
          <Typography
            color={COLORS.BLACK}
            boxProps={{ marginBottom: 4 }}
            variant={TYPOGRAPHY.Paragraph}
            className="seed-phrase-intro__copy"
          >
            {t('seedPhraseIntroTitleCopy')}
          </Typography>
          <Box marginBottom={4}>
            <video controls>
              <source
                type="video/webm"
                src="./images/videos/recovery-onboarding/video.webm"
              />
              <track
                default
                srcLang="en"
                label="English"
                kind="subtitles"
                src="./images/videos/recovery-onboarding/subtitles-en.vtt"
              />
            </video>
          </Box>
          <Box width={BLOCK_SIZES.ONE_THIRD}>
            <Button type="primary" onClick={handleNextStep}>
              {t('next')}
            </Button>
          </Box>
        </div>
        <div className="seed-phrase-intro__right">
          <div className="seed-phrase-intro__sidebar">
            <Box marginBottom={4}>
              <span className="seed-phrase-intro__sidebar-title">
                {t('seedPhraseIntroSidebarTitleOne')}
              </span>
              <span>{t('seedPhraseIntroSidebarCopyOne')}</span>
            </Box>
            <Box marginBottom={4}>
              <span className="seed-phrase-intro__sidebar-title">
                {t('seedPhraseIntroSidebarTitleTwo')}
              </span>
              <ul className="seed-phrase-intro__sidebar_list">
                <li>{t('seedPhraseIntroSidebarBulletOne')}</li>
                <li>{t('seedPhraseIntroSidebarBulletTwo')}</li>
                <li>{t('seedPhraseIntroSidebarBulletThree')}</li>
                <li>{t('seedPhraseIntroSidebarBulletFour')}</li>
              </ul>
            </Box>
            <Box marginBottom={4}>
              <span className="seed-phrase-intro__sidebar-title">
                {t('seedPhraseIntroSidebarTitleThree')}
              </span>
              <span>{t('seedPhraseIntroSidebarCopyTwo')}</span>
            </Box>
            <Box marginBottom={4}>
              <span>{t('seedPhraseIntroSidebarCopyThree')}</span>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
