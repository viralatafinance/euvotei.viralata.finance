import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Layout from 'layout/Layout'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import Donate from './Donate'
import { RedirectPathToDonateOnly } from './Donate/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'
import useTheme from '../hooks/useTheme'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px;
  align-items: center;
  flex: 1;
  z-index: 2;
  min-height: 100vh;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => (props.theme.isDark ? '#000048' : '#fea604')};
    background-image: ${(props) => (props.theme.isDark ? 'url(images/sunset-bg-dark.jpg)' : 'url(images/sunset-bg.jpg)')};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
    z-index: 1;
    height: 100%;
  }
`

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`
  const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`)
  const { isDark, toggleTheme, theme } = useTheme()
  const fileId = 6

  const credentials: Credentials = {
    token: apiKey,
  }

  const stringTranslationsApi = new StringTranslations(credentials)

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem('pancakeSwapLanguage')
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  const fetchTranslationsForSelectedLanguage = async () => {
    stringTranslationsApi
      .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
      .then((translationApiResponse) => {
        if (translationApiResponse.data.length < 1) {
          setTranslations(['error'])
        } else {
          setTranslations(translationApiResponse.data)
        }
      })
      .then(() => setTranslatedLanguage(selectedLanguage))
      .catch((error) => {
        setTranslations(['error'])
        console.error(error)
      })
  }

  useEffect(() => {
    if (selectedLanguage) {
      fetchTranslationsForSelectedLanguage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}>
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <Layout>
                <ContentWrapper>
                  <Popups />
                  <Web3ReactManager>
                    <Switch>
                      <Route exact strict path="/" component={Donate} />
                      <Route component={RedirectPathToDonateOnly} />
                    </Switch>
                  </Web3ReactManager>
                </ContentWrapper>
              </Layout>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
