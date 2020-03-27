import React, { Component } from 'react';

const formosa = <path id="path5065" class="cls-1" d="M1501.77,522l-.22.53-.14.59,0,.47,0,.14,0,.6.14.59.08.61.22.55.25.87.23.56.34.48.46.39.51.3.52.28.22.55-.26.53-.43.43-.51.22-.6,0-.58,0-.59,0-.58.09-.51.28-.08.57.34.51.49.33.42.43.41.42.3.53.09.6.06.61-.12.57-.32.53-.31.51-.1.9,0,.61.26.55.33.5.36.48.43.41.46.38.46.38.42.42.24.55.11.6.05.61.15.58.2.57.18.59,0,.58-.4.46-.41.44-.4.43-.38.48-.08.6.16.58.24.56.28.52.36.49.29.53-.06.57-.3.54-.4.44-.55.23-.58.07-.58,0-.56-.17-.53-.27-.55-.19-.5-.33-.56-.16-.59,0-.5.3-.06.51V552l.07.6,0,.61,0,.61,0,.6v2.44l0,.6-.06.61,0,.6,0,.62.06.59.27.55.26.54.27.54,0,.61-.12.59-.24.56-.37.47-.53.25-.59.06-.56-.14-.56-.15-.59.07-.46.37-.59.68-.3.55V566l.34.51.46.38.47.45-.14.68-.49.4-.48.35-.44.4-.39.45-.44.42-.55.15h-.6l-.57-.14-.56-.25-.46.13.16.59.3.52.24.55.19.58.16.58.17.62,0,.61v.61l-.06.61-.21.56-.38.47-.48.34-.58.07-.59-.06-.57-.15-.58-.09-.79-.36,0-.57,0-.49v-.5l-.41-.52-.23,0-.2,0-.34.29-.23.7-.08.49-.14.51-.29-.31-.15-.48-.23-.44-.08,0-.31-.09-.45.07-.37-.14-.2-.47.25-.54.45-.06.37-.19.21-.71,0-.5v-.51l-.22-.42-.58,0,0,.5,0,.53-.33.19-.35-.27v-.73l.13-.48.13-.48.08-.51-.27-.32-.59.18-.07.49v1l-.34.51-.39-.24-.34-.3-.23-.44.18-.41.26-.42-.08-.71-.23-.44-.31-.35-.32.17-.21.47-.43.53-.42.1-.43,0-.43-.1-.24-.56.1-.49,0-.51-.32-.61-.36-.29-.4-.23-.36.12-.13.48.23.69.26.46-.39.35-.43,0-.42-.09-.41-.16-.4-.2-.36-.31.08-.39.36-.34.29-.64-.26-.34-.44,0-.43,0-.59,0-.42-.48-.31-.26-.44-.36-.29-.37-.22-.55-.12-.51-.08-.44-.44-.42-.22.7-.44-.08,0-.71-.13-.35-.55.34-.32.21-.32-.39v-.46l.14-.48-.44-.64-.91.15-.29-.62-.23-.35-.13-.35h0l-.18-.36-.39-.6-.37-.31-.17-.38-.16-.41-.06-.43-.18-.92-.31-.43,0-.47.22-.37-.39-.51-.52,0-.56,0-.5,0-.48-.06-.57-.42-.27-.29-.63-.21-.1-.06-.36-.24-.36-.37L1462,553l-.1-.2-.21-.44-.31-.28-.68-.11-.4,0h-.22l-.43.15h0l-.44-.49-.36-.15-.26-.36-.27-.4-.43-.35-1.2-.35-.15-.51.16-.53-.22-.59-.15-.91,0-.38-.11-.38-.1-.25-.09-.21-.24-.89-.38-.73-.66-.08-.45.2-.2.29-.67,0-.55.31-.28.3-.61,0-.55,0-.9.12-.43-.15-.26-.43-.15-.44-.21-.88.15-.44-.77-1.18,0-.53-.1-.38-.25-.32-.23-.28-.42-.39-.45-.54.25-.37-.37-.2h-.35l-.5,0-.25-.74-.69-.45-.16-.35,0-.69-.58-.14-.55,0-.43.19-.47.09-.58,0-.48,0-.5-.2-.65-.32-.45-.24-.36-.19-.45-.4-.26-.35,0-1.11,0-.38v-.37l-.15-.48-.25-.4-.24-.49-.33-.56-.31-.2h-.5l-.38,0-.64-.3-.56-.12-.36-.2-.49-.28-.34-.27-.35-.43-.12-.41-.3-.32-.46-.23-.33-.39-.35-.26-.32-.25-.22-.29-.4-.34-.27-.3-.3-.45-.47-.79-.19-.61-.39-.79-.27-1L1430,523l-.4-.48,0-.06-.36-.16-.46-.18-.4-.12-.25-.08-.4-.17-.36,0-.35-.4-1.18-.38-.42-.15-.54.12-.38,0-.5-.06-.34-.09-.32-.25-.4-.16-.51-.29-.7-.29-.41.24-.55.28-.71.1h-.34l-.39-.11-.31-.18-.39-.3-.31-.31-.25-.24-.29-.38-.33-.28-.38-.29-.77-.77-.41-.89h-.36l-.36,0-.64.14-.12-.43.06-.53.34-.59-1-.32-.67-.17-.72-.14-.37,0-.7-.12.11-.38.47-.09.21-.43-.15-.52.43-.31-.09-.43-.33-.31-.45-.52-.92.67-.33.11-.56.11-.32.06-.65.43-.4.45-.37.33-.12.45-.11.49-.44.45-.63.24-.43.09-.82.16-.37.17-.32.3-.43.31-.46.06-.6.18-.77.21-.6.22-.72.15-.58.2-.58.2-.84,0-.76-.21-.61-.28-.55-.3-.46-.26-.39-.21-.3-.35-.08-.68-.23-.36-.4-.36.07.67-.24.39-.52-.44-.38.17-.31.84-.43.12-.33-.21-.49.05H1392l-.61.2-.73-.69-.48-.57-.19-.31-.29-.48-.3-.41-.07-.1-.57-.39-.45-.52,0-.51-.22-.29L1388,512l.51-.36V511l0-1,.1-.41.27-.46.16-.47-.26-.33-.72.37-.09-.65-.13-.81-.15-.74-.12-.47-.16-.34-.2-.45-.19-.38-.06-.12,0,0-.2-.38-.2-.39-.15-.42-.09-.45-.08-.51-.44-.77-.29-.5.5-.56.09-.87.43-.38.33-.23-.2-.31-.34-.36-.24-.34-.41-.12-.07-.37-.33-.58-.61-.47-.33-.41-.63-.08-.48-.12h0l-.79,0-.37-.05-.28,0-.24.11-.16.09-.23.28-.26.25-.57.17-.28.29-.46-.33-.43.1-.41-.11.07-.48-.53.05-.43.11-.52.11-.37-.08-.54-.31-.23-.38-.37-.28h0l-.31,0-.47,0-.55.24h-.41l-.17-.41-.58-.05-.77.22-.33.21-.38-.08-.52-.22h-.71l-.32.13-.36-.11-.28-.39-.05-.39,0-.26.17-.75-.37-.3-.48-.31-.42.05-.2,0-.45,0-.14-.35-.72-.17-.92.4-.26-.31-.36-.13-.56-.11,0-.41-.3-.43h-.41l0,.12-.13.38v.11l.23,1.1-.19.46-.24.54-.18.09-.35.16-.33.26-.05.47-1-.39.23-.36.24-.49.23-.66-.29-.32-.33-.55-.44-.21-.38,0-.69-.17,0-.43.47-.34-.23-.78-.22-.26V490l0-.47.38-.92.39-.34.16-.51-.12-.45.18-.41.26-.53-.36-.14-.35,0-.43,0-.06-.49-.06-.84.34-.63-.18-.49-.31-.25.22-.46.21-.53-.16-.89-.22-.75.41-.07,0-.39-.24-.15-.4-.26-.56.28-.54.26h-.38l-.54-.15h-.37l-.39.31-.28-.53-.08-.62-.24-.32-.15-.6-.26-.28-.58,0-.49-.22.09-.64v-.63l-.54-.1.08-.59.22-.5-.5-.07-.52.1-.45-.44-.26-.53,0-.62-.33-.41-.4-.17.21-.6.33-.54-.1-.57-.6-.07,0-.6-.52-.35-.77-.3-.13-.47-.56-.23-.42-.35-.35-.48,0-.64-.4-.37-.55-.14-.47-.17,0-.61-.19-.26-.06-.1-.58.3-.53,0-.28-.48.21-.61.31-.49v-.53l-.57.19-.53.25-.59.14-.52-.09-.22-.59-.3-.53-.43-.42-.32-.52-.32-.52-.47-.36-.47-.4.21-.45-.44-.39-.56,0-.48.36-.46-.27.15-.61.23-.59.18-.58L1341,459l-.36-.16.17-.58.37-.49.38-.48-.46-.15-.52-.22-.36-.51-.49-.28-.57-.16-.5-.34-.52-.27-.54-.26-.43-.41-.34-.51-.32-.52-.38-.48-.52-.25-.6-.05-.57-.13-.57-.16-.56-.22-.4-.42-.05-.63-.3-.5-.34-.52-.51-.15-.59.12-.44-.35-.4-.5-.39-.49-.43-.37-.6,0-.55-.22-.57,0-.58-.07-.19-.56-.54-.25-.43-.42-.58-.16-.15-.61-.56-.07.39-.78.6-.15-.26-.47-.58-.17-.38-.36-.22-.31-.52-.27-.14-.61-.38-.14-.54.27-.58,0-.57-.18-.52-.34h-.52l-.55.16-.58-.23,0-.54.6-.28-.27-.33-.41-.52-.42-.14-.57.29-.31.18-.23-.27-.06-.21-.08-.31h-.09l-.82.06-.6-.05-.57-.16-.56-.21-.57-.17-.47-.35-.5-.4-.51-.23.11.62-.57,0-.45.34-.21.59-.5-.08-.35-.51-.58-.25-.37-.38,0-.65.1-.22.15-.33.31-.53.18-.59.12-.6-.63.21-.12-.51.22-.59-.19-.43-.67.55-.06-.57.06-.22.12-.37.1-.29.17-.55-.52.33-.44-.21-.3-.18-.37.5L1308,434l-.26-.12-.2-.57-.06-.62v-.63l0-.62,0-.61-.22-.56-.35-.5-.47-.38-.34-.5-.32-.55.24-.51.34-.54,0-.56-.42-.47.25-.48.59-.1.17-.47-.34-.54-.4-.48,0-.53-.5-.26-.55.05.09-.54.53-.33.43-.41-.29-.43-.58-.22-.55-.21-.55-.24-.55-.21-.58.07-.56.19-.45.44-.51.15-.26-.47.22-.62.22-.57-.33-.4-.13.2-.25.35-.48.28-.62-.15-.27-.48,0-.65.38-.46.54-.28.33-.51,0-.68h-.48l-.63.21-.23-.4-.1-.67,0-.59.26-.57-.23-.53-.6-.05-.48.29-.42.45-.5.33-.59.07-.4-.44-.26-.36-.1-.13-.52-.28-.49-.38.36-.36.52-.29.48-.35.25-.55V412l.3-.48.32-.18.21-.43-.54-.15-.14,0-.21-.55-.46.21-.25.57-.4.32-.21-.6,0-.08-.19-.5-.19-.58-.13-.61.08-.65-.57-.29-.38-.42-.55-.18.31-.53.2-.53-.42-.32-.24,0-.36,0-.59.07-.53-.25-.51-.31-.5-.32-.52-.31-.35-.37,0-.54-.6.08-.59.17-.29-.35.19-.63.24-.57.31-.53.35-.52-.11-.61-.42.18-.2.59-.4.45-.56.16-.28-.55-.2-.59-.17-.59-.11-.61-.16-.6-.18-.6-.28-.52-.39-.54-.66.21-.53-.22-.54-.32-.51-.31-.5-.35-.51-.4.53-.56.13-.5-.5-.36-.09-.61-.54-.25-.45-.38-.25-.59,0-.56.3-.19-.1-.48-.4-.52-.27-.55-.17-.5.86-.48,0-.42-.51-.16-.06,0-.57.22-.51-.2-.5-.36-.57-.2-.5-.28-.26-.43-.06-.1-.27-.58-.12-.17-.21-.27-.56.21-.28.54-.28.56-.31.53-.44.39-.58.2-.46-.19v-.68l-.1-.17-.11-.2h-.64l-.53-.3-.11-.53.33-.44-.33-.55-.51.23-.5.36-.46.17-.24-.29-.19-.14-.14-.1-.21.29-.44.44L1270,387l-.53-.31-.55-.21-.56-.22-.54-.23-.17-.57-.14-.2-.1-.14-.53.23h-.61l-.32-.45.46-.63-.17-.44-.6.11-.26.55-.25.25-.36-.11-.06-.67.25-.53.66-.61.24-.61-.28-.35-.6-.15-.57-.14-.57.11-.59.08-.57-.12-.55-.25-.56-.1-.6.15-.5-.2-.45-.43-.58-.12-.55-.19.12-.44.24-.55-.37-.43-.5-.37-.52-.3-.54-.23-.24-.56L1257,377l-.1-.24-.12-.3-.56.19-.39-.3-.09-.57-.53-.31-.41,0h-.15l-.57.21-.56-.17-.56-.21h-1.14l-.12-.1-.34-.28-.56-.17-.51-.28-.52-.34-.19-.51-.16-.58-.44-.42-.32-.51-.44-.32-.55-.06-.33,0-.52-.3-.52-.28-.45-.4-.26-.38.27-.47-.56-.28-.58-.1-.59-.08-.53-.21-.33-.31-.49.4-.57-.1-.42-.43-.36-.34,0-.64,0-.63v-.61l-.35-.5-.52-.3-.57-.12-.59.07-.61-.15-.4-.29.44-.46.55-.28.44-.35-.22-.57-.53-.27-.54-.28-.5-.32-.39-.45-.34-.52-.4-.43-.56-.19-.57-.17-.54-.24-.37-.48-.55-.23-.39-.42-.39-.43-.57-.16-.24-.53,0-.62-.37-.42-.61,0-.57-.14-.34-.43.56-.18.14-.6.12-.5-.57-.23-.53-.26-.6,0-.22-.57-.48-.11-.58.15-.57-.16-.44-.37-.14-.62-.17-.61-.49-.26-.53-.27-.51-.29-.46-.33-.27-.22-.34-.48.09-.63-.27-.54-.46-.41-.5.14-.27-.57,0-.61-.19-.55-.3-.54-.43-.31-.44.41-.36.52-.38-.2-.42-.46-.49-.33-.44-.38-.07-.61-.31-.53,0-.61-.08-.49-.61.06-.4-.34,0-.24,0-.4-.07-.62V342l0-.61-.18-.59-.38-.52-.3-.49,0-.61-.2-.5.45-.43.3-.51-.57,0-.58.12-.3-.49,0-.62-.15-.49-.13-.39-.08-.61.08-.62.2-.56-.56-.15-.46-.13-.36.49-.17.51.11.61-.45.35-.5-.3-.22-.6-.31-.38-.51.25-.23-.56.18-.57v-.56l-.43-.32.06-.63-.12-.6.17-.56-.49-.34-.35-.49-.32-.53h-1.16l-.18-.59.32-.5.08-.63-.47-.32-.58-.08h-.59l-.57-.1-.56-.19-.56-.17-.21-.56-.38-.31-.59-.22-.51.05-.43.46-.42.44-.58,0-.58-.06-.59-.05h-.58l-.58.15-.41.41-.15.61-.26.53-.51.06v-.6l.32-.54-.22-.5-.55-.23-.58-.06-.58-.12-.56.15-.55.07-.55-.25h-.59l-.56-.08-.43-.43-.49-.34-.39-.47-.48-.2-.58.09-.57.14-.57,0-.46-.38-.46-.38-.57-.11-.57-.14-.19-.06-.37-.13-.56-.13-.59.12-.51.23-.39.47-.45.26-.43-.43-.3-.54.06-.6-.14-.6-.18-.59-.2-.58-.33-.52-.23-.56-.2-.57-.41-.5-.47-.25-.54.36-.39-.24-.26-.45-.46-.34-.49-.37-.39-.48-.09-.64-.14-.64-.42-.22-.61.23-.41-.41-.08-.63-.29-.57-.41-.45-.56-.26-.56-.24-.54-.29-.42-.46-.39-.49-.31-.55-.2-.64v-.6l-.12-.63,0-.65-.22-.58-.37-.52-.43-.45-.54-.29-.47-.4-.4-.49-.37-.5-.46-.09-.3.6-.7.51-.62,0-.52-.28-.55-.21-.93-.08-.22-.51-.12-.62H1169l-.43,0-.52.32-.42.47-.57-.06-.53-.33-.09-.09-.34-.35-.39-.5-.4-.47-.46-.42-.39-.49-.26-.58-.31-.55-.41-.46-.32-.5,0-.64-.19-.61-.28-.57-.22-.61.24-.56.08-.64-.08-.37-.05-.26-.35-.5-.51-.37-.5-.36-.55-.26-.57-.21-.59-.18-.56-.23-.54-.29-.59-.2-.54-.7-.2-.61-.16-.62-.21-.6-.27-.58-.26-.58-.24-.58-.36-.52h-.36l.22.67.17.62.15.63v.65l-.33.44-.57-.25-.44-.44-.1-.13-.28-.35-.54-.3L1153,291l-.31-.54-.31-.57-.52-.1.1.4,0,.23.18.61-.62.14-.36-.51-.28-.62-.48-.25-.61-.05-.58-.17-.52-.31-.44-.47-.53-.08-.09.65-.25.48-.58-.17-.42-.89,0-.58-.17-.61-.41-.48-.54-.27-.57-.19-.48-.4-.41-.47-.13-.62-.25-.6-.51-.29-.6-.15-.6-.12-.57-.2-.55-.25-.57-.23-.57-.22-.55-.26-.5-.37-.44-.43-.18-.58,0-.67-.37-.36-.61.07-.41.45-.49.35-.61,0-.58-.17-.6-.05-.55-.26-.55-.21-.49.39-.42.45-.56.25-.48-.28,0-.67-.16-.61-.49-.35-.6,0h-.07l-.54,0-.59.09-.6.06-.61,0-.59-.11-.54-.28-.54-.27-.59-.17-.51-.36.1-.52.39-.43.43-.4.47-.72-.21-.29-.25-.35-.44.42-.38.51-.48.37-.53.32-.51.34-.5.35-.53.32-.6,0-.3-.52-.13-.63-.47-.39-.36-.29.36-.53-.08-.57-.16,0-.43.1-.47.39-.39.5-.24.59-.3.55-.43.41-.58-.24,0-.58.12-.62v-.64l.37-.53,0-.55-.14-.61.22-.62-.45-.5-.61.12-.51.37-.61,0-.19-.55.41-.45.45-.41-.52-.58-.56-.23-.59-.15-.5-.36h-.6l-.6-.06-.58-.18-.37-.48-.3-.58h-.79l-.58.18-.57.19-.6-.08-.58-.19-.29-.52-.57.21-.61,0-.58-.15-.15-.59-.47-.3-.34-.52-.14-.64-.56-.14-.62,0-.92.1,0-.5.52-.36.37-.51.41-.43-.34-.48-.55.26-.47.42-.51.27-.59.14-.53.31-.48.38-.34.14V259.3l0-1.38.11-3.67V85.44l0-8.08.88.87.31.91.4.44.85.31.71,0,.48,0,.8.45.5.81.13,1.91.74,1,1.2-.87.71.42.3.19.19,1.27,1.17,5.46.5,1.15.63.68.06.66-.44.23-.48.81-.28,1.9-1.39.6-.5.37.54.91.25.59.57.14.46.42.12.6.38.49.73-.42,1.06.41.24.54.49.35.36,1.19.94-1.45.53-.21,0,.44.54,1.67-.46.82-1.23,1.39-.25.94.23.59.83-.14.45-.4.46.24.63,1.44-1.22.53-.51.29.9,1.19.87.07.76,1.11.81,1.23.71,2.11.35.52.42.45.44.45.47.4.46.41.57.19.5.36-.35.25-.77.12.33.41.14.61.17.62.3.58.35-.17.41-.07.42.46.46.42.42.46.43.44.59.16.53.29.5.36.44.44.42.46.33.54.25.57.3.53.52-.34.25.53-.22.58.16.62.48.37.41.47.29.57.32.53.25.59.25.59.66-.61.49.25.18.61.33.53.31.55-.14.6-.51-.17-.54-.37,0,.56.33.54.08.63.37.51.37.5,0,.28.06.38.48-.27.42.3.19.62.14.51.09.18.18.36-.12.62-.06.62.1.62-.07.64v1.29l-.24.58,0,.58.59.07.54.29.44.44,0,.63v.63l-.38.49.12.63.2.61.25.59.36.51.34.55.54.09.44-.42.51-.35.25.52.34.54,0,.61.4.45.48.39.4.47.48.4.42.44.2.62.23.6.47.1.05-.66.44.1.45.44.78.15.49-.11.31.56.22.54.56.28.83.37.81.32.61-.2.49.25.44.43.44.48.48.41.26.52.12.62.19.61.36.52.53.26.6.52.11.64.4.47.45.44.38.5.47.38.55.27h.6l.58.44-.09.58.6.16.51.1.09,0,.57.19.51.31.49.39.46.42.46.43.47.42.41.47.24.57.11.64.1.64.08.64.12.63.16.62.22.61.31.55.5.34.58.19.6.06.42.45.46.42.5.37.47.4.33.52.31.55.32.55.44.43.47.4.43.44.49.38.59.08.58-.18.49-.34.59.08h.61l.55.25.59.07h.61l.59.12.56.26.44.32.17.34.48.37.54.31.53.3.44.44.58-.13.59.16,0,.61-.69.48.41.43.36.52.22.6.27.58.42.45.47.41.43.5.46,0,.57-.08.54.31.56.22.82.29-.3.37-.26.58-.08.64.06.63.24.6.35.52.43.46.47.39.46.41.41.46.36.52.49.56v.41l-.23.42.25.39.4.14.32-.14.43.14.52.5.36.08.67-.32.34.19h.4l.43,0,.42.08.45.53.25.32.41.3.12.11.25.23.26.37.31.32.28.27.48.21.55.17,1,0,.57.75.43.08v-.39l.66-.51.5.34.55,0,.32.11.36-.12.48-.16.44.06.43.17.12.38.25.34.32.28.31.14.44.18.34.12.81.1.88.26.27.37.36.37.16.51.28.4.64.18.49.25.65.23.29.25.18.69,0,.4.4.09.41.51.18.31v.39l-.1.37.49.2.47.15.4.47.54.49.84,1.27.63.32.74.26.5.21.54.25.74.19,1-.41.64.12.77.3.76.26.74.27.33.37.26.41.27.48.53,0,.49.2.31.35.56.43.55.23h.64l.07.75,0,.61.33.57.15-.65.3-.61.32.28.15.45.42.52.76.22.4.24.36.51.34.49.46.33.51.58,0,.38h-.57l-.24.51.23.64.46.78.19.44,0,.47-.51.48-.15.47.18.5.64.22.32.59-.33.55,0,.45.28.32.32.27v.78l.28.27.21.33.35.54.85.66.58.44.65.78.46.8.39.8.47.79v.55l.45.47.78.83.36.73.11,1,.29.88.55.92.67.85.34.63.15.4.17.49.63.58.47.54.79-.19.61-.05v.53l-.1.59.5.21.29-.21.35-.09.35-.18.23-.41.3-.3.51,0,.25-.28.28-.38.71,0,.7.6.32.23.44.08.52.17.42.41.44.66.44.5.52.67.32.57.62.56.43.38.59.49.46,0,.59.1.45.38.39.5.51.54.14.11.6.49.8.15.53.24.82,0,.86-.06.66-.13.6.09.51.42.26.5.66-.26,1-.12.49-.1.81-.1,1,.38.57.17.56,0,.62,0,.66-.11.54.07.43.29.29.44.44.67.36.17.33.35.54.26.51-.38,1,0,.74-.21.42.25.39,0,.37.46.48.42.45-.18.73.32.43-.15.44-.35h.46l.48-.1.69-.13.39.41.41,0,.19.34.33.45.4,0,.34.34.12.51,0,1,.11.68.48.53-.09.59.5.35-.45.59,1,.46.56-.33.71.08.88.47.37.32.3-.3.41.15.35.09.42.12.52.4.65-.06.94.09.73-.26.57-.5.51-.43.36-.23.55-.38.37-.07.46,0,.69.24.65.49.41.3.87.08.59.38.56.63.57.6.68.83.75.3h.67l.45.13.79.34.68.45.5.56.47.85,0,.66-.09.61-.07.62.19.45.05.11.43.34.64.09.54-.05h2.91l.56.12.34.51.39.44.53.26.55.19.56.18.57.11.58.1.58.1.57.12.56.15.58.1.57,0h1.17l.58,0,.58.06h.58l.59,0,.57-.11.58-.11h.57l.59,0,.58.08.57.07.58-.05.58-.13.57-.08.58,0,.59,0h.58l.58-.05.58-.07.57-.1.57-.13.57-.15.56-.15.54-.22.52-.29.51-.3.51-.3.58-.11.49-.3.45-.41.47-.38.5-.29.58.07.58,0,.58,0h1.18l.48-.34.44-.31.13.07.39.21.31.21.92.64,4.75,3.27.74.49,6.47,4.3,6.33,4.16,4.36,2.94,2,1.35.24.16,2.1,1.42,4.34,2.94,3.9,2.64,2.13,1.41.42.28.87.58,1.16.77,4.45,3,5.28,3.5,1.22.77,1.25.78.54.24.37.5.12.57-.14.62.28.52.4.48.39.47.29.52.23.56.36.5.32.51.37.48.44.4.45.4.45.39.48.36.39.45.26.56.36.48.51.3.57.07.56.19.5.32.56.17.51.3.46.38.18.57.17.6.2.58.27.54.35.5.3.53.06.61.16.6.19.58.24.57.27.54.38.47.45.41.51.28.57.22.49-.23.52-.24.57.17.47.36.36.49.25.56.09.19.14.32,0,0,.22.57.28.55.54.23.57.13h0l.54.09.58,0,.59,0,.57.13.53.28.45.39.13.59.42.45.33.5.29.55.55.12.58.11.57.15.57.15.57.12h.6l.47.31.51.29.56.16.56.22.32.5.27.56.29.53.54.22h.57l.46.4.43.42.29.53,0,.37.49.36.51.26.57.16.43.39.47.36.46.38.4.48.41.21.55-.26h.5l.44-.32.56-.2.57.08.51.3.4.46.52.25.52.27.58,0,.31.5.5.3.25.5.45.37h.57l.35.24.3.37.37.49.4.46.49.23h.59l.59,0,.48.14.5.15.57-.19.55.08.53.28.54.24.36.49.46.37.53.27.47.36.49.36.32.44.5.27.55.24.27.54.53.24.56.2.54.24.37.46.54.19.26.47.29.28.11.11.31.51.22.43.41.56.35.49.29.53h.55l.54-.27.51.22.51.29.56.18.45.4.3.23.41.3.47.38.43.42.24.56.35.5.48.34.48.36.42.46.48.25h.58l.52.07.56,0,.56-.13.49.29h.56l.58-.13.58,0,.53.26.57.13.59,0,.57-.2.56-.12.58.17.39.42.26.58.21.58.15.59.11.59.32.48.21.58.52.16.57-.18.51-.29.46.13.41.38.11.55.38.42.15.6h.14l.35,0h.09l.57.2.56.09.56-.2.55-.22.57-.12.57.12.51.26.59-.08.55,0,.53.28.56-.17.55-.23.5-.24h.36l.39-.31.55-.22.58-.09h.59l.52.24.47.37.57.13.59.11.57.13.54.23.54.24.54.25.54.24.55.19.57.14h0l.8.24.52.29.57.15.55.22.57.05.53-.28.51-.29.59-.05.54.21.48.36.42.42.44.41.49.36.4.43.36.49.29.54.09.61.35.5.36.49.07.61-.25.56-.13.57.33.49.57.18.53.25.52.3.28.54.28.55.41.44.33.48.17.6.16.59.39.37.57.32.59,0,.28.16.19.11.33.52.49.34.43.41.53.26.34.51.1.6,0,.62v.64l.48.14,0,.49-.34.43.32.54.5-.19.32-.52.52-.23.1,0,.42-.14.26-.54v-.63l.13-.59.33-.51.42-.44.5-.32.48-.33.33-.53.47-.32.5-.33.48-.35.32-.52.49-.31.52-.27.24-.57.53-.27.53-.26.52-.21.59,0,.61-.09.41.33.26.58.23.57.32.51.44.41.44-.21.42.47.24.3.42.3.23.56.24.52.55.23.59.14h.59l.59,0,.51.22.48.13.59-.11.19.53.34.51.37.48.39.45.07.62V366l0,.61,0,.63.5.26.57.14.46.39.46.36.57-.18.51-.23.57-.07.49-.37.57-.05.07.44.17.53.37.31.38.41-.09.62.1.42.32.36.14.58h.58l.56.18.5-.28.51-.31.45.14.39.08.44-.36.46-.39.45-.34.4.43.56-.16.54-.25.48-.17.23.59.28.55.29.54.26.55,0,.56v.6l0,.62.25.54.55.2.3.48.54.28.56.17,0,0,.4-.38.51.11.42-.29.52,0,.5.15.16,0,.39-.07.43-.15h1.55l.57.11.57.15.4,0,.19,0,.52.23.58.09.59.06.5-.29.53-.06.58.1.55.21.56.19.54.13.19.58.29.48.35.43,0,.63-.12.62.32.46-.14.43.42.34.52.3.4.45.38.49.58.44.23.6.4.35.49.34h.48l.53.12.51.32.55.16.53.14.46,0,.42.38.33.52.47.37.27.54.5.29.45.4.41.41-.22.51.25.46v.62l0,.61.27.48-.07.56,0,.61-.27.48.17.57,0,.44.3.33.34.4-.38.43.6.15.54-.07-.06.54.12.59-.23.56.79-.32.39.45.07.09.21.27-.15.58.32.29.37.29.56.11.42.29,0,.65-.15.59-.21.62.57,0,.27.46h.42l-.27.48-.48.38.35.48.11.25.14.32,0,.62v.61l.2.27.15.22.24.54.5.33.48.37.32.5.35.46.17.49.34.33.42.43.48.35.46.39.44.42.41.44.35.49.35.5.19.49,0,.1.32.36h.62l.56.17.52.3.47.37.44.41.5.49.5.33.48.36,0,0,.39.36.36.49.32.52.34.51.34.51.33.51.32.52.28.54.22.58.16.59.13.6,0,.62v.63l0,.6-.26.55-.29.55-.22.57-.21.58-.17.59-.21.58-.26.55-.23.58-.1.6.15.59.22.59.18.59.17.59.13.6.07.62V429l0,.61-.26.56-.35.5-.39.49-.51.21-.6-.09-.56-.29-.49.08-.27.58-.11.62,0,.61v.63l-.12.59-.2.59-.14.62-.36.46-.52.32-.58.09-.58-.11-.49-.36-.38-.47-.42-.43-.52-.29-.59-.18-.57-.05-.48.36-.32.53-.24.57-.21.58-.17.59-.08.61,0,.62.13.6.15.6.13.63-.23.54-.49.36-.59.06-.59-.11-.52-.29-.51-.34-.5-.32-.34-.22-.17-.11-.53-.22-.51.26-.5.37-.48.38-.46.38-.45.41-.45.4-.47.39-.43.42-.27.33-.11.13-.27.54-.21.59-.2.59-.17.59-.15.6-.16.64,0,.55.55.31.58.06.6,0,.6-.05.58.05.59.31.2.44-.32.55-.39.51-.38.49-.41.45-.47.36-.59.19-.5.28-.3.52-.24.59-.35.49-.53.29-.58.13-.6.06-.59,0-.54-.21-.5-.36-.52-.28-.63,0-.2.09-.32.14-.36.51-.2.63,0,.42v.16l.2.57.26.57.28.56.27.57.24.56.25.56.26.56.3.54.23.56.15.61.06.63,0,.59-.26.57-.35.51-.44.44-.51.29-.57.15-.6.08-.58,0h-1.2l-.57.13-.59.23-.48.33-.28.51-.12.64,0,.46,0,.17.11.61.38.44.47.39.46.41.43.43.32.51.21.58.15.61,0,.6-.21.59-.37.46-.18.08-.36.16-.55.25-.53.29-.49.33-.45.41-.43.43-.44.42-.34.49-.19.61.07.6.24.58.09.15.22.39.46.35.53.29.49.36.45.39.46.38.53.26.68.62-.31.52-.31.53-.34.49-.39.43-.5.28-.57.2-.56.19-.58.16-.56,0-.57-.13-.56-.18-.57-.15-.57-.14-.59-.1-.35.4v1.22l-.19.57-.23.56-.19.58-.14.59-.29.52-.35.5-.35.48-.36.49-.38.46-.45.38-.48.35-.51.29-.57.16-.44.38-.4.45-.52.25-.56.18-.52.28-.48.35-.46.37-.51.31-.53.26-.83.26-.58,0h-.59l-.58,0-.58,0-.58,0-.59,0-.58,0-.53.25-.41.43-.3.53-.38.46-.45.39-.5.31-.52.28-.49.34-.32.5-.2.57-.1.6.15.59.12.59.06.61.11.6,0,.6-.27.5-.59,0-.5-.2-.81-.15h-.09l-.57-.1-.48-.12L1508,499l-.46.25.13.59.35.47.48.36.52.29.49.32.5.31.59.06.53.24.47.37.33.49.33.51.23.55,0,.61-.12.6-.19.58-.38.44-.52.28-.56.17-.56.16-.57.17-.53.21-.57.16-.58.11-.55.22-.37.45-.29.54-.24.55-.16.58v1.23l.2.56.28.54.21.56,0,.61,0,.61,0,.6-.07.6,0,.61v.6l-.16.58-.2.58-.2.57-.14.51,0,.07-.2.58-.29.52-.26.14-.26.14-.51.3-.53.25-.55.2-.56.19-.54.23-.39.45Z"/>

export default formosa;
