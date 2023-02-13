const ONE_HOUR_IN_MS = 1000 * 60 * 60;

const showDate = (date: string) => {
  const currentDate = new Date();
  const diffInTime = +currentDate - +new Date(date);
  const diffInHours = diffInTime / ONE_HOUR_IN_MS;
  const postedAt = Math.floor(diffInHours);

  if (diffInHours >= 24) {
    const diffInDays = diffInHours / 24;

    if (diffInDays >= 365) {
      const years = Math.floor(diffInDays / 365);

      return `há ${years} ${years > 1 ? "anos" : "ano"}`;
    } else if (diffInDays >= 30) {
      const months = Math.floor(diffInDays / 30);

      return `há ${months} ${months > 1 ? "meses" : "mês"}`;
    } else {
      const days = Math.floor(diffInDays);

      return `há ${days} ${days > 1 ? "dias" : "dia"}`;
    }
  } else if (postedAt > 1) {
    return `há ${postedAt} horas`;
  } else if (postedAt === 1) {
    return `há ${postedAt} hora`;
  } else {
    const diffInSeconds = diffInTime / 1000;
    if (diffInSeconds < 60) {
      const seconds = Math.round(diffInSeconds);
      return `há ${seconds} ${seconds > 1 ? "segundos" : "segundo"}`;
    }
    const diffInMinutes = diffInTime / (1000 * 60);
    const minutes = Math.floor(diffInMinutes);

    return `há ${minutes} ${minutes > 1 ? "minutos" : "minuto"}`;
  }
};

export { showDate };
