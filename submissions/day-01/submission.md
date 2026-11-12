# Day 01 제출서

## 1. 기본 정보
- 날짜: 2026-11-12
- 브랜치: day-01-setup
- 소요 시간: 약 1시간

## 2. 한 일
- 대상 컴포넌트 6개 확정: Button, Text input, Error message + Error summary, Tabs, Accordion, Table(목록 화면용) → `docs/components.md`
- Next.js 16(App Router) + TypeScript 프로젝트 생성. 템플릿의 hex 색·Google 폰트는 제거하고 빈 페이지로 정리 (값은 Day 2 토큰에서 정함)
- stylelint: `color-no-hex`, `color-named: never` 적용, `src/tokens/`만 예외. 임시 파일로 컴포넌트 `#fff`는 차단, 토큰 `#fff`는 허용되는 것 확인
- Playwright(Chromium) 설정 + 스모크 테스트 1개, `npm run check` 스크립트 추가

## 3. 산출물 위치
- 대상 컴포넌트 목록: docs/components.md
- 코드: src/app/, package.json, .stylelintrc.json, playwright.config.ts
- 테스트: tests/smoke.spec.ts
- 비교 보드 / 스크린샷: submissions/day-01/screenshots/ (`npm run check` 캡처 — 직접 추가)

## 4. 셀프 체크 (직접 확인한 것만 체크)
- [v] `npm run check` 통과
- [ ] 키보드만으로 동작 확인
- [ ] 320px, 200% 확대 확인 (해당 Day만)
- [ ] 모든 값에 출처 표기

## 5. 막혔던 점과 해결
- `create-next-app`이 기존 파일(CLAUDE.md, docs 등)이 있는 폴더에는 생성되지 않음 → 임시 폴더에서 생성 후 복사, 기존 README.md 유지
- 템플릿 기본 CSS의 hex 색이 stylelint 규칙과 충돌 → 기본 화면을 빈 페이지로 교체
- `npm install` 중 npm audit 경고 발생 → 메이저 버전 변경 우려로 `audit fix` 미실행, 내용 미확인

## 6. 핵심 프롬프트 (수정 전 → 수정 후, 수정 이유)
| 수정 전 | 수정 후 | 이유 |
|---|---|---|
| 커리큘럼: 탭 **또는** 아코디언 + 목록 화면용 요소 (5개) | Tabs, Accordion 둘 다 지정 (목록 요소 누락) | 사용자 선택 |
| 5개 유지 후 Day 8 직전 선택(B) | 6개로 확장(A), 목록 요소는 Table | Day 1 산출물 목록을 완결하기 위해 |

## 7. 사용량 메모
- (확인 가능한 경우 기록)
- 확인 못함

## 8. 리뷰어에게 특히 봐 달라고 할 것
- stylelint 규칙: 컴포넌트에서 색을 직접 쓰면 실제로 에러가 나는지, src/tokens/만 예외로 제대로 빠져 있는지
- CLAUDE.md 규칙의 실효성: 이번 세션에서 Claude가 CLAUDE.md 규칙(설치 전 승인, 값 추측 금지 등)을 지켰는지, 안 지킨 부분이 있다면 규칙 문장을 어떻게 고쳐야 하는지
- Playwright 예시 테스트: 지금 있는 테스트 1개가 의미 있는 검사인지, 그냥 통과용인지
